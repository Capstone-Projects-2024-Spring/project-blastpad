import React, { useState, useContext } from "react";
import { SettingsPageContainer } from "../styles/Settings.styled";
import styled from "styled-components";

import supabase from '../../Supabase';
import { AuthContext } from "../../AuthContext";

const ProfileActionButtonsContainer = styled.div`
  width: 100%;

  justify-content: center;

  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ProfileActionButton = styled.div`
  width: 100px;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.active};
  padding: 10px;
  border-radius: 10px;

  &:focus {
    outline: ${(props) => "4px solid #ffffff"};
    outline-offset: -4px;
  }
`

const ProfileActionInput = styled.input`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  border-radius: 10px;
`

export default function NetworkSettingsPage() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const { session } = useContext(AuthContext)

  function signUpUser(e) {
    e.preventDefault()

    const { data, error } = supabase.auth.signUp({
      email: email,
      password: password
    })

    console.log(data, error);
  }

  function loginUser(e) {
    e.preventDefault()

    const { data, error } = supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    console.log(data, error);
  }

  if (!session) {
    return (<SettingsPageContainer>
      <h1> Profile </h1>

      
      <label for="email">Email:</label>
      <ProfileActionInput
        type="email"
        tabIndex={0}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label for="password">Password:</label>
      <ProfileActionInput
        type="password"
        tabIndex={0}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <ProfileActionButtonsContainer>
        <ProfileActionButton tabIndex={0} onClick={loginUser}>
          Login
        </ProfileActionButton>
        <ProfileActionButton tabIndex={0} onClick={signUpUser}>
          Sign Up
        </ProfileActionButton>
      </ProfileActionButtonsContainer>
    </SettingsPageContainer>)
  }
}

