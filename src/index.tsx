import React from 'react'
import {makeComponents} from './makeComponents'
import styled from 'styled-components';

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
} = makeComponents(styled, {
    View: 'div',
    Text: 'div',
    Button: props => {
        const {onPress, ...rest} = props
        rest.style = {
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: 'inherit',
            ':active': {
              opacity: 0.2,
            },
        }
        return (
            <button {...rest} onClick={onPress}/>
        )
    },
    Image: props => {
        const {source, ...rest} = props
        return (
            <img {...rest} src={source}/>
        )
    },
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
}