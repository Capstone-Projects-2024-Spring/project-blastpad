import React, { useState } from "react";
import * as Styled from "../styles/Settings.styled";

export default function ClassroomSettingsPage(){
    return (
        <Styled.ClassroomSettingsPageContainer>
            <Styled.ClassroomSettingsPageClassroomTitle>
                Mr.Riley's 4th Grade Robotics
            </Styled.ClassroomSettingsPageClassroomTitle>
            
            <Styled.ClassroomSettingsPageMetaData>
                <p><strong>Teacher:</strong> ruleym2034</p><br/>
                <p><strong>Students:</strong> 24</p><br/>
                <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Aliquam at augue id massa semper pretium. 
                Vestibulum nec lacinia sapien. Praesent quis eleifend tellus. 
                Donec eleifend sapien posuere tortor au</p>
            </Styled.ClassroomSettingsPageMetaData>

            <Styled.ClassroomSettingsPageLeaveClassButton>

            </Styled.ClassroomSettingsPageLeaveClassButton>
            
        </Styled.ClassroomSettingsPageContainer>
    
    );
}
