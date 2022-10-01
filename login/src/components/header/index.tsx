import * as S from "./styles";

export const Header = ({ toogleTheme = () => {} }) => {
  return (
    <>
      <S.Container about="Header">
        <S.Logo>Logo</S.Logo>
        <S.Theme onClick={toogleTheme}>
        switch
        </S.Theme>
      </S.Container>
    </>
  );
};
