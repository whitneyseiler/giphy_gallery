import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import Search from './Search.jsx';

let Nav = ({}) => {
    return (
      <Navbar brand="Giphy Gallery" right>
        <NavItem>
          <Search />
        </NavItem>
      </Navbar>
    )
}

export default Nav;