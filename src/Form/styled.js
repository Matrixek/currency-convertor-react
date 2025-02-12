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
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background-color: rgb(110, 110, 255);
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
    background-color: rgb(110, 110, 255);
    color: white;
    padding: 10px;
    border-radius: 5px;

    &:hover {
    background-color: rgb(92, 92, 233); 
    }
    &:active{
    background-color: rgb(92, 92, 180);
    }
`;
export const ButtonResult = styled.span`
    font-weight:bold;
`;