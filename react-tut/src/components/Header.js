import React from 'react';
import HeaderStyles from './header.module.scss'
 
function Header() {
  return (
    <header className={HeaderStyles.header}>
      <img src='#'></img>
      <h2>Header Component</h2>
      <h4>React Course</h4>
    </header>
  )
}

export default Header