import { Title, SubTitle, Container } from './styles';
export default function Banner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Banner.Title = function ({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Banner.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle>{children}</SubTitle>;
};
