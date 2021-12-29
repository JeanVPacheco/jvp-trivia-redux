import React from 'react';
import lightbulb from '../images/light-bulb.svg';

export const Header = () => {
  return (
    <header className="header-logo">
      <img src={lightbulb} className="lightbulb-header" />
      <span>JVP Trivia</span>
    </header>
  );
};
