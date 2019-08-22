import React from 'react'
import { makeComponents } from './makeComponents'
import styled from 'styled-components'

const {
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
    Hidden,
    Link,
    ScrollView
} = makeComponents(styled, {
    View: 'div',
    Text: 'div',
    Button: (props) => {
        const { onPress, ...rest } = props
        rest.style = {
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            textDecoration: 'none',
            ':active': {
                opacity: 0.2
            }
            // ':hover': {
            //     background: Color(colors.primary).darken(0.3).toString(),
            //     color: 'white',
            //     boxShadow: 1,
            // }
        }
        return <button {...rest} onClick={onPress} />
    },
    Image: (props) => {
        const { source, ...rest } = props
        return <img {...rest} src={source} />
    },
    ScrollView: styled.div`
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
    `,
    Hidden: styled.div`
        visibility: hidden;
        display: inline-block;
        width: auto;
        height: auto;
        margin: 0;
        padding: 0;
    `,
    Link: 'a'
})

export {
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
    Hidden,
    Link,
    ScrollView
}
