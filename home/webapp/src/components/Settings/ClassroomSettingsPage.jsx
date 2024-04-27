import { useState, useContext } from "react";
import * as Styled from "../styles/Settings.styled";
import { AuthContext } from "../../AuthContext";
import {
 GameLoadingContainer, Loader, Checkmark, MetaDataTitle
  } from '../styles/HomePage.styled';
export default function ClassroomSettingsPage(){
    const { classroom, setClassroom } = useContext(AuthContext)
        
    const [classroomJoining, setClassroomJoining] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [invite, setInvite] = useState("");
    const [menu, setMenu] = useState(0);
    const [formData, setFormData] = useState({title: "",description: "",teacher: "", invite_code: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const joinClassroom = () => {
        if(invite.length == 0) { return; }

        setClassroomJoining(true)
        setStatusMessage(`Joining...`)
    
        fetch(`/join/classroom/${invite}`, {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setSuccess(true)
            setStatusMessage(`Joined ${data.classroom[0].title}`)
            setClassroom(data.classroom[0]);

          })
          .catch((error) => {
            console.log(error)
            setStatusMessage(`Invalid invite code.`)
          })
          .finally(() => {
            setTimeout(() => {setClassroomJoining(false); setSuccess(false)}, 2500)
          });
      }

      const leaveClassroom = () => {
        setClassroomJoining(true)
        setStatusMessage(`Leaving Classroom...`)
        setTimeout(() => {setClassroom(null); setClassroomJoining(false); setSuccess(false)}, 2500)
      }

      const createClassroom = (event) => {
        event.preventDefault();
        setClassroomJoining(true)
        setStatusMessage(`Creating...`)
        console.log(formData);
        fetch(`/create/classroom/`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setSuccess(true)
            setStatusMessage(`Created ${data.classroom[0].title}`)
            setClassroom(data.classroom[0]);
          })
          .catch((error) => {
            console.log(error)
            setStatusMessage(`Could not create classroom.`)
          })
          .finally(() => {
            setTimeout(() => {setClassroomJoining(false); setSuccess(false)}, 2500)
          });
    };

    return (
        <Styled.SettingsPageContainer>
            <GameLoadingContainer className={classroomJoining ? '' : 'notActive'}>
                {classroomJoining ? 
                <>
                    <Loader/>
                    <Checkmark className={success ? '' : 'notActive'}/>
                    <MetaDataTitle style={{position: 'absolute'}}>
                    {statusMessage}
                    </MetaDataTitle>
                </>
                : <></>
                }
            </GameLoadingContainer>

            {classroom != null ?
            <>
            <Styled.ClassroomSettingsPageClassroomTitle>
                {classroom.title}
            </Styled.ClassroomSettingsPageClassroomTitle>
            
            <Styled.ClassroomSettingsPageMetaData>
                <p><strong>Teacher:</strong> {classroom.teacher} </p><br/>
                <p><strong>Description:</strong> {classroom.description} </p>
                <p><strong>Invite Code:</strong> {classroom.invite_code} </p>
            </Styled.ClassroomSettingsPageMetaData>

            <Styled.ClassroomSettingsPageLeaveClassButtonContainer>

                <Styled.ClassroomSettingsPageLeaveClassButton
                onClick={()=>{leaveClassroom()}}>
                    Leave Classroom
                </Styled.ClassroomSettingsPageLeaveClassButton>

            </Styled.ClassroomSettingsPageLeaveClassButtonContainer>
            </>
            : <>

            <Styled.TopButtonContainer>
                <Styled.TopButtonInContainer active={menu == 0} tabIndex={0} onClick={()=>{setMenu(0)}}> Join </Styled.TopButtonInContainer>
                <Styled.TopButtonInContainer active={menu == 1} tabIndex={0} onClick={()=>{setMenu(1)}}> Create </Styled.TopButtonInContainer>
            </Styled.TopButtonContainer>
                
            {menu == 0 ? <>
            <Styled.ClassroomSettingsPageClassroomTitle>
                Enter your Invite Code!
            </Styled.ClassroomSettingsPageClassroomTitle>
            
            <Styled.SearchBarInput type="text" value={invite} onChange={(event)=>{setInvite(event.target.value);}}/>
            
            <Styled.ClassroomSettingsPageLeaveClassButtonContainer>
                <Styled.ClassroomSettingsPageLeaveClassButton
                    disabled={invite.length == 0}
                    onClick={()=>{joinClassroom()}}
                >
                    Join Class
                </Styled.ClassroomSettingsPageLeaveClassButton>

            </Styled.ClassroomSettingsPageLeaveClassButtonContainer>
            
            </>
            : <>

                <Styled.ClassroomSettingsPageFormContainer
                    onSubmit={createClassroom}
                >
                    <Styled.ClassroomSettingsPageFormField>
                        <label htmlFor="title">Title:</label>
                        <input tabIndex={0} type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                    </Styled.ClassroomSettingsPageFormField>

                    <Styled.ClassroomSettingsPageFormField>
                        <label htmlFor="description">Description:</label>
                        <input tabIndex={0} id="description" name="description" value={formData.description} onChange={handleChange}/>
                    </Styled.ClassroomSettingsPageFormField>

                    <Styled.ClassroomSettingsPageFormField>
                        <label htmlFor="teacher">Teacher:</label>
                        <input tabIndex={0} type="text" id="teacher" name="teacher" value={formData.teacher} onChange={handleChange}/>
                    </Styled.ClassroomSettingsPageFormField>

                    <Styled.ClassroomSettingsPageFormField>
                        <label htmlFor="invite_code">Invite Code:</label>
                        <input tabIndex={0} type="text" id="invite_code" name="invite_code" value={formData.invite_code} onChange={handleChange}/>
                    </Styled.ClassroomSettingsPageFormField>
            
                    <Styled.CreateClassroomButton
                        tabIndex={0}
                        style={{gridColumn: "span 2", width: "100%"}}
                    >
                        Create Classroom
                    </Styled.CreateClassroomButton>

                </Styled.ClassroomSettingsPageFormContainer>

            </>
            }
            </>
        }
            
        </Styled.SettingsPageContainer>
    );
}
