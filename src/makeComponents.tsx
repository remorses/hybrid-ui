import {TouchableOpacityProps} from 'react-native';
// import styled from '@emotion/native';

import defaultTheme from './theme';
import React, {FC, forwardRef,} from 'react';
import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  flex,
  FlexProps,
  border,
  BorderProps,
  overflow,
  OverflowProps,
  background,
  BackgroundProps,
  typography,
  TypographyProps,
  BackgroundColorProps,
} from 'styled-system';
import {CSSProperties, StyledInterface} from 'styled-components';
import css, {get} from '@styled-system/css';
// import shouldForwardProp from '@styled-system/should-forward-prop';

const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);
export const variant = ({theme, variants, tx = 'variants'}) => {
  if (!theme || !Object.keys(theme).length) {
    theme = defaultTheme;
  }
  if (!Array.isArray(variants)) {
    variants = [variants]
  }
  let style = {}
  for (const variant of variants) {
    style = {...style, ...get(theme, tx + '.' + variant, get(theme, variant))}
  }
  return css(style)(theme);
};

export type ThemedCSS = BoxProps & TextProps & CSSProperties & any;

type ThemedComponentProps = {
  css?: ThemedCSS;
  variants?: string | string[];
  __css?: ThemedCSS;
  ref?: any;
  tx?: any;
  as?: any;
};

export type BoxProps = ThemedComponentProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  ShadowProps &
  OverflowProps &
  FlexboxProps &
  BackgroundProps &
  BackgroundColorProps &
  OverflowProps;

export type TextProps = ThemedComponentProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  OverflowProps &
  ColorProps;

export const makeComponents = (styled: StyledInterface | any, primitives) => {
  const {View: _view, Text: _text, Image: _image, Button: _button } = primitives
  const Box: FC<BoxProps> = styled(_view)(
    {
      margin: 0,
      padding: 0,
      width: '100%',
      alignSelf: 'center',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    base,
    variant,
    sx,
    (props: any) => props.css,
    compose(
      space,
      layout,
      typography,
      flexbox,
      background,
      color,
      border,
    ),
  ) as any;
  Box.defaultProps = {variants: 'box'};
  const Text: FC<TextProps> = styled(_text)(
    {
      margin: 0,
      padding: 0,
      width: '100%',
      height: 'auto',
    },
    base,
    variant,
    sx,
    (props: any) => props.css,
    compose(
      space,
      layout,
      typography,
      color,
      border,
    ),
  ) as any;
  Text.defaultProps = {variants: 'text'};

  const H1: FC<TextProps> = forwardRef<any, TextProps>((props, ref) => (
    <Text ref={ref} tx="variants" variants="h1" {...props} __css={{}} />
  ));

  const H2: FC<TextProps> = forwardRef<any, TextProps>((props, ref) => (
    <Text ref={ref} tx="variants" variants="h2" {...props} __css={{}} />
  ));



  const Button: FC<TextProps & TouchableOpacityProps> = forwardRef(
    ({...props}: any, ref) => (
      <Text
        ref={ref}
        as={_button}
        variants="button"
        {...props}
        __css={{
          textAlign: 'center',
          px: 3,
          py: 2,
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: 4,
        }}
      />
    ),
  );

  type ImageProps = {
    source: any;
  } & BoxProps;
  const Image: FC<ImageProps> = forwardRef(({...props}: any, ref) => (
    <Box
      ref={ref}
      as={_image}
      variants="image"
      {...props}
      __css={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  ));

  const Card: FC<BoxProps> = forwardRef((props, ref) => (
    <Box ref={ref} variants="card" {...props} />
  ));

  const Row: FC<BoxProps> = forwardRef((props, ref) => (
    <Box
      ref={ref}
      variants="row"
      {...props}
      __css={{
        flexDirection: 'row',
      }}
    />
  ));

  const Column: FC<BoxProps> = forwardRef((props, ref) => (
    <Box
      ref={ref}
      variants="column"
      {...props}
      __css={{
        flexDirection: 'column',
      }}
    />
  ));

  const Line: FC<BoxProps> = forwardRef((props, ref) => (
    <Box
      ref={ref}
      variants="line"
      {...props}
      __css={{
        height: 0,
        width: '100%',
      }}
    />
  ));
  return {
    Box,
    Column,
    Row,
    Image,
    Line,
    Card,
    H1,
    H2,
    Text,
    Button,
  }
};
