import { Button } from "../button";
import { Input } from "../input";
import * as S from "./styles";

export const Form = () => {
  return (
    <S.Container about="form-container">
      <S.Form>
        <Input />
        <Input />
        <Button text="submit" size="70%"/>
      </S.Form>
    </S.Container>
  );
};
