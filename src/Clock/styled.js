import styled from "styled-components";

export const FormDate = styled.p`
    text-align: right;
    margin: auto;
    font-size: medium;

  @media (max-width:${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 0px;
    text-align: center;
}
`;