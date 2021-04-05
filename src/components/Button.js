import React from 'react';
import './Button.css';

const STYLES = ['buttonPrimary', 'buttonOutlined', 'buttonBlack'];

const SIZES = ['buttonMedium', 'buttonLarge'];

const PAGES = ['buttonProjects', 'buttonAboutMe']



export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonPage
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonPage = PAGES.includes(buttonPage) ? buttonPage : PAGES[0];

  return (


    <button
        className={`button ${checkButtonStyle} ${checkButtonSize} ${checkButtonPage}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    
  );
};
