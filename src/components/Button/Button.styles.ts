
import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    height: 48px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 12px 28px 14px 28px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 24px;

`;
export const Label = styled.Text`   
    font-size: 18px;
font-family: IBM Plex Sans;
font-style: normal;
color: ${({ theme }) => theme.COLORS.WHITE};
font-weight: 600;
line-height: 22.6px;
`;