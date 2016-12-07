import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import { Menu, Dropdown, Icon, Input, Divider } from 'semantic-ui-react';

import styles from '../supplier.css';



 function SupplierMenu (props){
    const userId = 'anything';
    return (

      <Menu className={styles.menu} icon='labeled' fluid vertical>
                
        <Menu.Item className={styles.navButton} name='Dashboard' active={props.location.pathname === '/supplier/dashboard/'+userId} onClick={() => browserHistory.push( '/supplier/dashboard/'+userId)}>
          <Icon name='settings' />
          Dashboard
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='Products' active={props.location.pathname ===  '/supplier/dashboard/'+userId+'/products'} onClick={() => browserHistory.push('/supplier/dashboard/'+userId+'/products')}>
          <Icon name='shop' />
          Products
        </Menu.Item>
        

        <Menu.Item className={styles.navButton} name='add-product' active={props.location.pathname === '/supplier/dashboard/'+userId+'/addProducts'} onClick={() => browserHistory.push('/supplier/dashboard/'+userId+'/addProducts')}>
          <Icon name='add to cart' />
         Add Products
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='orders' active={props.location.pathname ===  '/supplier/dashboard/'+userId+'/orders'} onClick={() => browserHistory.push('/supplier/dashboard/'+userId+'/orders')}>
          <Icon name='shipping' />
          Orders
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='Earnings' active={props.location.pathname ===  '/supplier/dashboard/'+userId+'/earnings'} onClick={() => browserHistory.push('/supplier/dashboard/'+userId+'/earnings')}>
          <Icon name='dollar' />
          Earnings
        </Menu.Item>

      </Menu>
     
    )
}

export default SupplierMenu;