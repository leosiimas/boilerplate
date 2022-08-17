/* eslint-disable react/prop-types */
import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, NextJS e StyledC Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desnvolvedor de frente para o código"
    />
  </S.Wrapper>
)

export default Main
