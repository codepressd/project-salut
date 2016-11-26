import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container, Header, Icon, Grid, Image } from 'semantic-ui-react';


// Import Style
import styles from '../faq.css';

// Import Actions
//import { fetchPost } from '../../PostActions';

// Import Selectors
//import { getPost } from '../../PostReducer';

export function faqPage(props) {
  return (
    <div>
<div className={styles.topCover}>
      <Container >
        <Image src='/bird.png' alt='bird' centered/>
        <h2 className={styles.center}>Frequently Asked Questions</h2>
      </Container>
</div>
<Grid className={styles.grid} columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Header as='h2' icon>
          <Icon name='home' />
          One Shop Ordering
          <Header.Subheader>
            Order from all your suppliers in one place.
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header as='h2' icon>
          <Icon name='lemon' />
          Local Suppliers 
          <Header.Subheader>
            We strive to provide you with as many local organic options as possible.
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header as='h2' icon>
          <Icon name='settings' />
          Detailed Reporting
          <Header.Subheader>
            We have detailed reports to stay on top of your business.
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
  );
}



export default faqPage;