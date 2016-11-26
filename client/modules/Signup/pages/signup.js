import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Container, Header, Icon, Grid, Image, Button, Checkbox, Form, Input, Message, Radio, Select, TextArea, Divider, Menu, Segment  } from 'semantic-ui-react';

import styles from '../signup.css';

//for restaurants
const foodStyle = [
  { text: 'American', value: 'American' },
  { text: 'French', value: 'French' },
  { text: 'Italian', value: 'Italian' },
  { text: 'Japanese', value: 'Japanese' },
  { text: 'Chinese', value: 'Chinese' },
  { text: 'Vietnamese', value: 'Vietnamese' },
  { text: 'Greek', value: 'Greek' },
]

//for suppliers
const supplyType = [
  { text: 'Farmer', value: 'farmer' },
  { text: 'Rancher', value: 'rancher' },
  { text: 'Co-op', value: 'co-op' },
  { text: 'Food Distributor', value: 'food-distributor' },
  { text: 'Produce Distributor', value: 'produce-distributor' },
  { text:'Wine Distributor', value: 'wine-distributor'},
  { text: 'Liqour Distributor', value: 'liqour-distributor' },
]

class Signup extends React.Component{
	handleItemClick =(e)=>{
    	e.preventDefault();
  	}

  	render(){
  		return(
  			<div>
			       <div className={styles.topCover}>
			            <Container >
			              <Image src='/bird.png' alt='bird' centered/>
			              <h2 className={styles.center}>Are You A Restaurant or Supplier?</h2>
			            </Container>
			      </div>
			      <Container>
			       	<Grid columns={3} divided>
				    <Grid.Row>
				      <Grid.Column>
				        <Button onClick={()=> browserHistory.push('/supplier')}>Supplier</Button>
				      </Grid.Column>
				      <Grid.Column>
				        <h1>- OR -</h1>
				      </Grid.Column>
				      <Grid.Column>
				         <Button onClick={()=> browserHistory.push('/restaurant')}>Restaurant</Button>
				      </Grid.Column>
				    </Grid.Row>
				</Grid>
			      </Container>
			</div>
  		)
  	}
}

export default Signup;