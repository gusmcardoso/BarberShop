import React from 'react';
import { useTheme } from 'styled-components/native';
import * as S from './LoginScreen.styles';
import { useState } from "react";
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import Logo from '../../assets/logo.png';

export function LoginScreen() {

  const { COLORS } = useTheme();
  function handleForgotPassword() {
    console.log('ok');
  }
  return (
    <S.Container>
      <S.ImageLogo source={Logo} />
      <S.Title>Boas vindas de volta, Las Vegas Barber Shop</S.Title>
      <S.SubTitle>Informe sua senha para acessar o app</S.SubTitle>
      <S.Form>
        <Input />
        <Button />
        <S.ForgotPassword onPress={handleForgotPassword}>
          Esqueci minha senha
        </S.ForgotPassword>
      </S.Form>

    </S.Container>
  );
}
