import {
  Container,
  Title,
  Select,
  Option,
  TextBig,
  Frame,
  Options,
} from './styles';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function ({ children }) {
  return <Title>{children}</Title>;
};

Header.Select = function ({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Header.Option = function ({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Header.Options = function ({ children, ...restProps }) {
  return <Options {...restProps}>{children}</Options>;
};

Header.Bigtext = function ({ children, expand = false }) {
  return (
    <Frame>
      <TextBig>{children}</TextBig>
      <span expand={expand}>&#x2304;</span>
    </Frame>
  );
};

Header.Frame = function ({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
