import styled from "styled-components";

export const Container = styled.div``

export const Input = styled.input`
    position: relative;
    width: 100%;
    padding: .5rem 0;
    margin-bottom: 2rem;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid #fff;

    &:focus ~ label,
    &:valid ~ label {
        top: -6rem;
        font-size: 13px;
    }
`

export const Label = styled.label`
    position: relative;
    color: #000;
    left: 0;
    top: -4rem;
    font-size: 16px;
    padding: .5rem 0;
    transition: .5s;
    pointer-events: none;
`