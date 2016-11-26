import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import { Menu, Dropdown, Icon, Input, Divider } from 'semantic-ui-react';

import styles from '../restaurant.css';

export function sideMenu (){

    return (
      <Menu className={styles.menu} icon='labeled' fluid vertical>
        <Menu.Item>
        <h3>Search For Products</h3>
          <Input placeholder='Search...' />
        </Menu.Item>
        
        <Menu.Item className={styles.navButton} name='gamepad' active={'gamepad' === 'gamepad'} onClick={() => browserHistory.push('/')}>
          <Icon name='settings' />
          Dashboard
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='video camera' active={'activeItem' === 'video camera'} onClick={() => browserHistory.push('/')}>
          <Icon name='shop' />
          Shop
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='video play' active={'activeItem'=== 'video play'} onClick={() => browserHistory.push('/')}>
          <Icon name='payment' />
          Orders
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='video play' active={'activeItem'=== 'video play'} onClick={() => browserHistory.push('/')}>
          <Icon name='shipping' />
          Suppliers
        </Menu.Item>
      </Menu>
     
    )
}

export default sideMenu;