import React from "react";
import { useTheme } from "styled-components/native";
import * as S from './LoginScreen.styles';

/* import Logo from '../../assets/logo.png'; */
export function LoginScreen() {
    const { COLORS } = useTheme();
    return (
        <S.Container>
            {/*  <S.ImageLogo source{Logo} /> */}
            <S.Title>Boas vindas de volta, Las Vegas Barber Shop</S.Title>
            <S.SubTitle></S.SubTitle>
        </S.Container>
    );
}
