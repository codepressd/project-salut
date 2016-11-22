import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2016 &middot; Salut.io</p>
    </div>
  );
}

export default Footer;
