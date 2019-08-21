import { Theme, boxShadow, } from 'styled-system'
import * as CSS from 'csstype'
import Color from 'color'

const space = [
    0, 4, 8, 16, 32, 64, 128, 256
]

const sizes = [
    0, 4, 8, 16, 32, 64, 128, 256, 500, 900
]

const colors = {
    primary: '#001EC4',
    globalBackground: '#EFF3FB',
    background: '#D7DCE6',
    text: '#4C5461',
    lightText: '#7A869A',
    white: '#FFFFFF',
}

const shadows: Theme['shadows'] = [
    '0px 2px 10px rgba(159,159,159,0.3)',
    '0px 2px 10px rgba(159,159,159,0.7)'
]


const fonts = {
    default: 'SF UI Text',
}


const radii = [
    '4px',
    '8px',
]

const variants = {
    text: {
        fontFamily: fonts.default,
    },
    h1: {},
    h2: {},
    image: {},
    button: {
        color: colors.white,
        bg: colors.primary,
        ':hover': {
            background: Color(colors.primary).darken(0.3).toString(),
            color: colors.white,
            boxShadow: shadows[1],
        },

    },
    card: {
        borderRadius: radii[1],
        background: colors.background,
        boxShadow: shadows[0],
        marginTop: space[3],
        padding: space[3],
        height: '100%',
        width: '100%',
    } as CSS.Properties,
}

export default {
    colors,
    fonts,
    space,
    shadows,
    sizes,
    variants,
    radii,
}
