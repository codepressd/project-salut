import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { Menu } from 'semantic-ui-react';
import GetStarted from '../../../../components/getStarted';


// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
        <Menu className={styles.navColor} pointing secondary>
        <span className={styles.myBrand}>Salut.io</span>
          <Menu.Item name='home' active={context.router.isActive('/', true)} onClick={browserHistory.push('/')} />
          <Menu.Item name='About' active={context.router.isActive('/About', true)} onClick={browserHistory.push('/About')} />
          <Menu.Item name='FAQ'  active={context.router.isActive('/FAQ', true)} onClick={browserHistory.push('/FAQ')}/>
          <Menu.Menu position='right'>
            <GetStarted />
            <Menu.Item name='Get Started' onClick={GetStarted()}  />
            <Menu.Item name='Login'  />
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
