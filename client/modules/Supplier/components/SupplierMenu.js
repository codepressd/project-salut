import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import { Menu, Dropdown, Icon, Input, Divider } from 'semantic-ui-react';

import styles from '../supplier.css';

export function SupplierMenu (){

    return (
      <Menu className={styles.menu} icon='labeled' fluid vertical>
                
        <Menu.Item className={styles.navButton} name='Dashboard' active={'gamepad' === 'gamepad'} onClick={() => browserHistory.push('/')}>
          <Icon name='settings' />
          Dashboard
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='Products' active={'activeItem' === 'video camera'} onClick={() => browserHistory.push('/')}>
          <Icon name='shop' />
          Products
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='add-product' active={'activeItem'=== 'video play'} onClick={() => browserHistory.push('/')}>
          <Icon name='add to cart' />
         Add Products
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='orders' active={'activeItem'=== 'video play'} onClick={() => browserHistory.push('/')}>
          <Icon name='shipping' />
          Orders
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='Earnings' active={'activeItem'=== 'video play'} onClick={() => browserHistory.push('/')}>
          <Icon name='dollar' />
          Earnings
        </Menu.Item>

      </Menu>
     
    )
}

export default SupplierMenu;