import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import { Menu, Dropdown, Icon, Input, Divider } from 'semantic-ui-react';

import styles from '../supplier.css';

const userId = 'rest';

 function SupplierMenu (props){

    return (

      <Menu className={styles.menu} icon='labeled' fluid vertical>
                
        <Menu.Item className={styles.navButton} name='Dashboard' active={props.location.pathname === '/supplierDash/'+userId} onClick={() => browserHistory.push( '/supplierDash/'+userId)}>
          <Icon name='settings' />
          Dashboard
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='Products' active={props.location.pathname ===  '/supplierDash/'+userId+'/products'} onClick={() => browserHistory.push('/supplierDash/'+userId+'/products')}>
          <Icon name='shop' />
          Products
        </Menu.Item>
        

        <Menu.Item className={styles.navButton} name='add-product' active={props.location.pathname === '/supplierDash/'+userId+'/addProducts'} onClick={() => browserHistory.push('/supplierDash/'+userId+'/addProducts')}>
          <Icon name='add to cart' />
         Add Products
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='orders' active={props.location.pathname ===  '/supplierDash/'+userId+'/orders'} onClick={() => browserHistory.push('/supplierDash/'+userId+'/orders')}>
          <Icon name='shipping' />
          Orders
        </Menu.Item>

        <Menu.Item className={styles.navButton} name='Earnings' active={props.location.pathname ===  '/supplierDash/'+userId+'/earnings'} onClick={() => browserHistory.push('/supplierDash/'+userId+'/earnings')}>
          <Icon name='dollar' />
          Earnings
        </Menu.Item>

      </Menu>
     
    )
}

export default SupplierMenu;