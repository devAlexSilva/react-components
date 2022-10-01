import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: 3rem;
  padding: 0.5rem;
`;

export const Logo = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-family: sans-serif;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
`;

export const Theme = styled.div`
    color: ${props => props.theme.colors.text};
`;
