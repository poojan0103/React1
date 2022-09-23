import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const SideBar = () => {
  return (
    <div>
        <div className="tool-bar">
            
            <div className="title">React</div>
        </div>
        <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/add">
        Add
      </a>
    
      <a className="menu-item" href="/view">
        View
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>

      
    </Menu>
    </div>
  );
};
