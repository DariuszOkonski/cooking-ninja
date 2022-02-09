import './ThemeSelector.css';
import modeIcon from '../assets/mode-icon.svg';

import React from 'react';
import { useTheme } from './../hooks/useTheme';

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const {changeColor} = useTheme();
  
    return (
      <div className='theme-selector'>
          <div className="mode-toggle">
              <img src={modeIcon} alt="" />
          </div>

          <div className="theme-buttons">
              {
                  themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color}}
                    ></div>
                  ))
              }
          </div>


      </div>
    )
}
