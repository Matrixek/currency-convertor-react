import styled from "styled-components";

export const StyledForm = styled.fieldset`
    border: 1px solid #000000;
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
    background-color: aqua;
    box-shadow: 0px 0px 40px 2px #000;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background-color:${({ theme }) => theme.colors.ButtonColor};
`;
export const LabelText = styled.span`
    width: 150px;
    display: inline-block;
    margin-right: 5px;
`;

export const LabelTextResult = styled.p`
    font-weight: bold;
    display: inline-block;
    margin-right: 3px;
    font-size: 18px;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 3px;
    border-color: #777;
    background-color: rgb(255, 213, 213);

`;
export const Select = styled.select`
     background-color:bisque;
     border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.ButtonColor};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 5px;

    &:hover {
    background-color:  ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.white};
    }
    &:active{
    background-color: ${({ theme }) => theme.colors.ButtonColor};
    color: ${({ theme }) => theme.colors.white};
    }
`;
export const ButtonResult = styled.span`
    font-weight:bold;
`;
export const Loading = styled.p`
color: ${({ theme }) => theme.colors.teal};
`;
export const Failure = styled.p`
color : ${({ theme }) => theme.colors.crimson};
`;