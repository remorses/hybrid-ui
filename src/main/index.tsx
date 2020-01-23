import React, { FC, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import { box, text, variants } from './styleProps'
import {
    BoxProps,
    TextProps,
    ButtonProps,
    ImageProps,
    ScrollViewProps,
    LinkProps,
    ThemedComponentProps
} from './types'

export * from './types'

export const Box: FC<BoxProps> = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    ${variants}
    ${box}
`
Box.displayName = 'Box'

export const Card: FC<BoxProps> = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    ${variants}
    ${box}
`
Card.displayName = 'Card'

export const Text: FC<TextProps> = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ${variants}
    ${text}
`
Text.displayName = 'Text'

export const ScrollView: FC<ScrollViewProps> = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: auto;
    ${({ noScrollbar }: any) =>
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
    ${variants}
    ${box}
`
ScrollView.displayName = 'ScrollView'

export const Hidden: FC<BoxProps> = styled.div`
    visibility: hidden;
    display: inline-block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    ${box}
`
Hidden.displayName = 'Hidden'

export const Row: FC<BoxProps> = (props) => (
    <Box flexDirection='row' {...props} />
)
Row.displayName = 'Row'

export const Column = Box
