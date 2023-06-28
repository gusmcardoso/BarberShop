import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    max-height: 48px;
    padding: 12px 24px;
    border-radius: 22px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_DARK};

`;
export const ImageLogo = styled.Image`
margin-bottom: 40px;
`;
export const Title = styled.Text`
font-size: 24px;
font-weight: 700;
line-height: 28.8px;
text-align: center;
margin-bottom: 24px;
color: ${({ theme }) => theme.COLORS.WHITE}
`;
export const SubTitle = styled.Text`
font-size: 16px;
font-family: IBM Plex Sans;
font-weight: 500;
line-height: 120%;
color: ${({ theme }) => theme.COLORS.NEUTRAL_DARK}
`;