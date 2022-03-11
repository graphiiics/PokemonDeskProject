import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/contexts/ThemeContext';
import './palettes.css';


const Palettes = () => {
    const { themes, setTheme } = useContext(ThemeContext);
    //console.log(themes);

    const palettesItems = themes.map((theme, index) =>{
        return  <div className="palette-item" key={index}>
                    <div className='palette' onClick={() => setTheme(theme)}>
                        <div className='row-color' style={{backgroundColor: theme.r1}}>{theme.r1}</div>
                        <div className='row-color' style={{backgroundColor: theme.r2}}>{theme.r2}</div>
                        <div className='row-color' style={{backgroundColor: theme.r3}}>{theme.r3}</div>
                        <div className='row-color' style={{backgroundColor: theme.r4}}>{theme.r4}</div>
                    </div>
            </div>
    })
    return (
        <div className="palette-container">
            {palettesItems}
        </div>
    )
}

export default Palettes
