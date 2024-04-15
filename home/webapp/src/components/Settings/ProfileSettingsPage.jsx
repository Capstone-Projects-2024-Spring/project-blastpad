import React, { useState } from "react";
import { SettingsPageContainer } from "../styles/Settings.styled";
import styled from "styled-components";

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
  

  return (<SettingsPageContainer>
    <h1> Profile </h1>

    
    <label for="email">Email:</label>
    <ProfileActionInput type="email" tabIndex={0}></ProfileActionInput>

    <label for="password">Password:</label>
    <ProfileActionInput type="password" tabIndex={0}></ProfileActionInput>
    <ProfileActionButtonsContainer>
      <ProfileActionButton tabIndex={0}>
        Login
      </ProfileActionButton>
      <ProfileActionButton tabIndex={0}>
        Sign Up
      </ProfileActionButton>
    </ProfileActionButtonsContainer>
  </SettingsPageContainer>)
}

