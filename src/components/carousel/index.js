import { Container, Inner, Item, Title, Icon, Row } from './styles';

export default function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Carousel.Item = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Carousel.List = function ({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
Carousel.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Carousel.Item.Icon = function ({ src, ...restProps }) {
  return <Icon src={src}></Icon>;
};

Carousel.Item.Row = function ({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
