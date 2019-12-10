import {
    SpaceProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    ShadowProps,
    FlexProps,
    BorderProps,
    OverflowProps,
    BackgroundProps,
    TypographyProps,
    BackgroundColorProps,
    PositionProps
} from 'styled-system'
import { CSSProperties, StyledInterface } from 'styled-components'

export type ThemedCSS = BoxProps & TextProps & CSSProperties & any

export type ThemedComponentProps = {
    // css?: ThemedCSS
    variants?: string | string[]
    ref?: any
    as?: any,
    style: CSSProperties
}

export type BoxProps = ThemedComponentProps &
    LayoutProps &
    SpaceProps &
    BorderProps &
    TypographyProps &
    PositionProps &
    ShadowProps &
    OverflowProps &
    FlexboxProps &
    BackgroundProps &
    BackgroundColorProps &
    ColorProps

export type TextProps = ThemedComponentProps &
    LayoutProps &
    SpaceProps &
    TypographyProps &
    OverflowProps &
    ColorProps


export type ImageProps = {
    source: any
} & BoxProps

export type ButtonProps = {
    onPress?: Function,
} & BoxProps
export type ScrollViewProps = {
    noScrollBar?: boolean,
} & BoxProps
export type LinkProps = {
    href?: string,
} & TextProps