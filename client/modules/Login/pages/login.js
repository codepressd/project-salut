import React, { PropTypes as T } from 'react';
import { Container, Grid, Form, Icon, Header, Checkbox, Button } from 'semantic-ui-react';


import styles from '../login.css';

class Login extends React.Component {


    render() {


        return (
            <Container className={styles.fullPage}>
		<Header as='h2' icon textAlign='center'>
		      <Icon name='users' circular />
		      <Header.Content>
		        Login
		      </Header.Content>
		 </Header>

		<Grid verticalAlign='middle' columns={1} centered>
		
			    <Form >
			    <Form.Field>
			      <label>Email</label>
			      <input type='email' name='email' ref='email' placeholder='Email' required/>
			    </Form.Field>
			    <Form.Field >
			      <label>Password</label>
			      <input type='password' name='password' ref='password' placeholder='Password' required/>
			    </Form.Field>
			    <Button type='submit'>Submit</Button>
			  </Form>
		</Grid>
	</Container>
        )
    }
}

export default Login;
