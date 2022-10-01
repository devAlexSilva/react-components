import * as S from "./styles";
import { Button } from "../button";

export const Header = ({ toogleTheme = () => {} }) => {
  return (
    <>
      <S.Container about="Header">
        <S.Logo>Logo</S.Logo>
        <Button onClick={toogleTheme} size="20%" text="Switch Theme" />
      </S.Container>
    </>
  );
};
