import React from 'react';
import { useTheme } from 'styled-components/native';
import { ButtonProps } from "react-native";
import * as S from './Button.styles';
import styled from 'styled-components';

export function Button() {
    const { COLORS } = useTheme();
    return (
        <S.Container>
            {/* <S.Icon /> */}
            <S.Label>
                Acessar o App
            </S.Label>
        </S.Container>
    );
}

