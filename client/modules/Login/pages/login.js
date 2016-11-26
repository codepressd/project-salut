import React from 'react';
import {Container, Grid, Form, Icon, Header, Checkbox, Button} from 'semantic-ui-react';

import styles from '../login.css';

class Login extends React.Component{
	render(){
		return(
			<Container className={styles.fullPage}>
				<Header as='h2' icon textAlign='center'>
				      <Icon name='users' circular />
				      <Header.Content>
				        Login
				      </Header.Content>
				 </Header>
				<Grid verticalAlign='middle' columns={1} centered>
					    <Form>
					    <Form.Field>
					      <label>First Name</label>
					      <input placeholder='First Name' />
					    </Form.Field>
					    <Form.Field>
					      <label>Last Name</label>
					      <input placeholder='Last Name' />
					    </Form.Field>
					    <Form.Field>
					      <Checkbox label='I agree to the Terms and Conditions' />
					    </Form.Field>
					    <Button type='submit'>Submit</Button>
					  </Form>
				</Grid>
			</Container>
		)
	}
}

export default Login;