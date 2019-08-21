import React, { useContext } from 'react'
import {makeComponents} from '../makeComponents'
import styled, {ThemeContext} from 'styled-components/native';
import {Button as _Button, View, Image as _Image, Text as _Text, TouchableHighlight, TouchableOpacity} from 'react-native'
import {variant} from '../makeComponents'
import {StyleSheet} from 'react-native'

const TemporaryText = styled(_Text)({}, variant)
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
    View,
    Text: _Text,
    Button: props => {
        let { children, style, ...rest} = props
        console.log(rest)
        style = StyleSheet.flatten(style)
        const {width, height} = StyleSheet.flatten(style)
        delete style.width
        delete style.height
        return (
            <TouchableOpacity style={{width: width, height: height}} {...rest}>
                <_Text style={style}>{children}</_Text>
            </TouchableOpacity>
        )
    },
    Image: _Image,
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