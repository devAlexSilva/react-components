import styled from "styled-components";

export const Button = styled.button`
    padding: .5rem;
    border: none;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secundary};
`
