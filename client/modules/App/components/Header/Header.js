import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { Menu } from 'semantic-ui-react';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
 
  return (
    <div className={styles.header}>
        <Menu className={styles.navColor} pointing secondary>
        <span className={styles.myBrand}>Salut.io</span>
          <Menu.Item name='home' active={context.router.isActive('/', true)} onClick={()=> browserHistory.push('/')} />
          <Menu.Item name='About' active={context.router.isActive('/about', true)} onClick={()=> browserHistory.push('/about')} />
          <Menu.Item name='FAQ'  active={context.router.isActive('/faq', true)} onClick={()=> browserHistory.push('/faq')} />
          <Menu.Menu position='right'>
            <Menu.Item name='Signup'  active={context.router.isActive('/signup', true)} onClick={()=> browserHistory.push('/signup')} />
            <Menu.Item name='Login'  active={context.router.isActive('/login', true)} onClick={()=> browserHistory.push('/login')} />
          </Menu.Menu>
        </Menu>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
