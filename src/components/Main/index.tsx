import * as S from './styles';

const Main = ({
  title = 'NextJS',
  description = 'TypeScript, ReactJS, NextJS e Styled-Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/dev-illustration.svg"
      alt="Desenvolvedor de frente para um computador."
    />
  </S.Wrapper>
);

export default Main;
