import React, { PropTypes as T } from 'react';
import { Container, Grid, Form, Icon, Header, Checkbox, Button } from 'semantic-ui-react';
import { authorizeUser } from '../../../components/actions/authActions.js';
import { loginRequest } from '../actions/loginAction';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import validateInput from '../../../../server/util/validateLogin';
import classnames from 'classnames';

import styles from '../login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, data) {
        e.preventDefault();
        const { errors, typeOfUser, isValid } = validateInput(data);
      
        if (!isValid) {
            this.setState({ errors });
        }

        if (isValid) {
            this.setState({
                errors: {},

            });

            this.props.loginRequest(data)
                .then((res) => {
                    //if success push user data to store
                    const { _id, companyName, email, firstName, lastName, role } = res.data.user;
                    const token = res.data.token;
                    const activeUser = {
                        id: _id,
                        email,
                        firstName,
                        lastName,
                        companyName,
                        role
                    }
                    this.props.authorizeUser(activeUser, token);
                    browserHistory.push('/' + activeUser.role + '/dashboard/' + activeUser.id);
                })
                .catch((err) => this.setState({ errors: err.response.data }));
        }
    }

    render() {
         const { errors } = this.state;
        return (
            <Container className={styles.fullPage}>
		<Header as='h2' icon textAlign='center'>
		      <Icon name='users' circular />
		      <Header.Content>
		        Login
		      </Header.Content>
		 </Header>

		<Grid verticalAlign='middle' columns={1} centered>
		
			    <Form onSubmit={this.handleSubmit}>
				<Form.Group  widths='equal' >
				          <Form.Input label={errors.email && errors.email || 'Email'} className={classnames({'error': errors.email})} name='email' placeholder={errors.email && errors.email || 'Email'} required />
				          <Form.Input label={errors.password && errors.password ||'Password'} type='password' className={classnames({'error': errors.password})} name='password' placeholder={errors.password && errors.password ||'Password'} required />
			        	</Form.Group>
			    <Button type='submit'>Submit</Button>
			  </Form>
		</Grid>
	</Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginRequest: loginRequest(state),
        authorizeUser: authorizeUser(state)
    };
}

// Login.propTypes = {
//     loginRequest: React.PropTypes.func.isRequired,
//     authorizeUser: React.PropTypes.func.isRequired
// }

export default connect(null, { loginRequest, authorizeUser })(Login);
