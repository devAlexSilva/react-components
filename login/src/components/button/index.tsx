import * as S from "./styles";

type props = {
  text?: string,
  size?: string,
  onClick?: VoidFunction
};
export const Button = ({ text, size, onClick }: props) => {
  return <S.Button onClick={onClick} about="btn" style={{width:size}}>{text}</S.Button>;
};
