import React from 'react'
import { Box } from '../src/main'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'

const theme = {
    colors: {
        primary: 'blue'
    }
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box bg='primary' width='20px' height='40px'></Box>
        </ThemeProvider>
    )
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
