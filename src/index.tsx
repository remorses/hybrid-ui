import React, {FC} from 'react';
import styled from 'styled-components';
import {box, text, variants} from './styleProps';
import {
  BoxProps,
  TextProps,
  ButtonProps,
  ImageProps,
  ScrollViewProps,
  LinkProps,
} from './types';

export const Box: FC<BoxProps> = styled.div.attrs(props => ({
  variants: ['box'],
}))`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  ${box}
  ${variants}
`;
Box.displayName = 'Box';

export const Card: FC<BoxProps> = styled.div.attrs(props => ({
  variants: ['card'],
}))`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  ${box}
  ${variants}
`;
Card.displayName = 'Card';
export const Text: FC<TextProps> = styled.div.attrs(props => ({
  variants: ['text'],
}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${text}
  ${variants}
`;
Text.displayName = 'Text';
export const Button: FC<ButtonProps> = styled.button.attrs((props: any) => ({
  onClick: props.onPress,
  variants: ['button'],
  onPress: undefined,
}))`
  width: auto;
  padding: 4px 8px;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  :active {
    opacity: 0.2;
  }
  ${box}
  ${variants}
`;
Button.displayName = 'Button';
export const Image: FC<ImageProps> = styled.img.attrs((props: any) => ({
  src: props.source,
  variants: ['image'],
}))`
  ${box}
  ${variants}
`;
Image.displayName = 'Image';
export const ScrollView: FC<ScrollViewProps> = styled.div.attrs(props => ({
  variants: ['scrollview'],
}))`
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: auto;
    ${({noScrollbar}: any) =>
      noScrollbar
        ? `
            &::-webkit-scrollbar {
                width: 0px;
                background: transparent; /* Chrome/Safari/Webkit */
            }
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* IE 10+ */
            `
        : ''}
    ${box}
    ${variants}
`;
ScrollView.displayName = 'ScrollView';

export const Hidden: FC<BoxProps> = styled.div`
  visibility: hidden;
  display: inline-block;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  ${box}
`;
Hidden.displayName = 'Hidden';

export const Link: FC<LinkProps> = styled.a.attrs(props => ({
  variants: ['link'],
}))`
  ${text}
  ${variants}
`;
Link.displayName = 'Link';

export const H1: FC<TextProps> = props => (
  <Text variants={['h1']} {...props} />
);
H1.displayName = 'H1';

export const H2: FC<TextProps> = props => (
  <Text variants={['h2']} {...props} />
);
H2.displayName = 'H2'

export const Row: FC<BoxProps> = props => (
  <Box flexDirection="row" {...props} />
);
Row.displayName = 'Row'

export const Column = Box;
