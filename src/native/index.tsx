import React from 'react'
import {makeComponents} from '../makeComponents'
import styled from 'styled-components/native';
import {Button as _Button, View, Image as _Image, Text as _Text} from 'react-native'

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
    Text: _Text,
    Button: _Button,
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