import React, { createContext, useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-1: ${props => (props.theme.r1)};
    --color-2: ${props => (props.theme.r2)};
    --color-3: ${props => (props.theme.r3)};
    --color-4: ${props => (props.theme.r4)};
  }
`;

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
    const themes = [
        { r1: '#00AF91', r2: '#007965', r3: '#F58634', r4: '#FFCC29'}, //yellow
        { r1: '#FDE8CD', r2: '#433520', r3: '#025955', r4: '#00917C'}, //grey
        { r1: '#222831', r2: '#393E46', r3: '#00ADB5', r4: '#EEEEEE'}, //blue
        { r1: '#184D47', r2: '#96BB7C', r3: '#FAD586', r4: '#D6EFC7'}, //pastel
        { r1: '#FFF89A', r2: '#FFC900', r3: '#086E7D', r4: '#1A5F7A'}, //pastel
        { r1: '#FF6363', r2: '#FFAB76', r3: '#FFFDA2', r4: '#BAFFB4'}, //pastel
        { r1: '#26001B', r2: '#810034', r3: '#FF005C', r4: '#FFF600'}, //pastel
        { r1: '#B91646', r2: '#DFD8CA', r3: '#FBF3E4', r4: '#105652'}, //pastel
        { r1: '#78DEC7', r2: '#D62AD0', r3: '#FB7AFC', r4: '#FBC7F7'}, //pastel
        { r1: '#EEEEEE', r2: '#F8485E', r3: '#512D6D', r4: '#00C1D4'}, //pastel
        { r1: '#000000', r2: '#3E432E', r3: '#616F39', r4: '#A7D129'}, //pastel
        { r1: '#FCF876', r2: '#CEE397', r3: '#8BCDCD', r4: '#3797A4'}, //pastel
        { r1: '#303841', r2: '#3A4750', r3: '#F6C90E', r4: '#EEEEEE'}, //pastel
        { r1: '#2EC1AC', r2: '#3E978B', r3: '#D2E603', r4: '#EFF48E'}, //pastel
        { r1: '#120078', r2: '#9D0191', r3: '#FD3A69', r4: '#FECD1A'}, //pastel
        { r1: '#CBE0E0', r2: '#2C5460', r3: '#61B136', r4: '#BBDC2F'}, //pastel
    ]

    const [theme, setTheme ] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme ? JSON.parse(localTheme) : themes[0];
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{ themes, setTheme }}>
            <GlobalStyles theme={theme} />
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
