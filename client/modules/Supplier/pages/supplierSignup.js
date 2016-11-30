import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { supplierSignupRequest } from '../actions/supplierSignupActions';
import { Container, Header, Icon, Grid, Image, Button, Checkbox, Form, Input, Message, Radio, Select, TextArea, Divider } from 'semantic-ui-react';
import classnames from 'classnames';
import validateInput from '../../../../server/util/validateSignup';
// Import Style
import styles from '../supplier.css';

const supplyType = [
    { text: '', value: '' },
    { text: 'Restaurant', value: 'restaurant' },
    { text: 'Farmer', value: 'farmer' },
    { text: 'Rancher', value: 'rancher' },
    { text: 'Co-op', value: 'co-op' },
    { text: 'Food Distributor', value: 'food-distributor' },
    { text: 'Produce Distributor', value: 'produce-distributor' },
    { text: 'Wine Distributor', value: 'wine-distributor' },
    { text: 'Liqour Distributor', value: 'liqour-distributor' },
]

class SupplierSignup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, data) {
      e.preventDefault();
      const {errors, isValid} =  validateInput(data);

      if (!isValid){
        this.setState({errors});
        }
      
      if(isValid){

            this.setState({ errors: {} });
  
            this.props.supplierSignupRequest(data)
                .then(() => console.log('success'))
                .catch((err) => this.setState({ errors: err.response.data }));
          }
    }
    render() {
        const { errors } = this.state;

        return (
<div>
       <div className={styles.topCover}>
            <Container >
              <Image src='/bird.png' alt='bird' centered/>
              <h2 className={styles.center}>Supplier Sign Up</h2>
            </Container>
      </div>
    {/*Form Submit*/}
    <Container className={styles.form}>
       <Form onSubmit={this.handleSubmit}>
       <Form.Group  widths='equal' >
          <Form.Input label='Username' className={classnames({'error': errors.username})} name='username' placeholder={errors.username && errors.username || 'Pick a Username'} required />
          <Form.Input label='Email' className={classnames({'error': errors.email})} name='email' placeholder={errors.email && errors.email ||'Email'} required />
        </Form.Group>
         <Form.Input label='Password' className={classnames({'error': errors.password})} type='password' name='password' placeholder={errors.password && errors.password ||'Password'} required />
          <Form.Input label='Password Confirm' className={classnames({'error': errors.passwordConfirm})} type='password' name='passwordConfirm' placeholder={errors.passwordConfirm && errors.passwordConfirm ||'Confrim Password'} required />
        <Form.Group className={styles.group} widths='equal'>
          <Form.Input label='First Name' className={classnames({'error': errors.firstName})} name='firstName' placeholder={errors.firstName && errors.firstName ||'First Name'} required/>
          <Form.Input label='Last Name' className={classnames({'error': errors.lastName})} name='lastName' placeholder={errors.lastName && errors.lastName ||'Last Name'} required/>
          <Form.Input label='Company Name' className={classnames({'error': errors.companyName})} name='companyName' placeholder={errors.companyName && errors.companyName ||'Company Name'} required />
        </Form.Group>
        <Divider horizontal>Your Business Location</Divider>
        <Form.Group className={styles.group} widths='equal'>
          <Form.Input label='Address' className={classnames({'error': errors.address})} name='address' placeholder={errors.address && errors.address ||'Address'} required/>
          <Form.Input label='City' className={classnames({'error': errors.city})} name='city' placeholder={errors.city && errors.city ||'City'} required/>
          <Form.Input label='State' className={classnames({'error': errors.state})} name='state' placeholder={errors.state && errors.state ||'State'}  required/>
        </Form.Group>
        <Divider section />
        <Form.Select className={classnames({'error': errors.businessType})} label='Business Type'  name='businessType' options={supplyType} placeholder={errors.businessType && errors.businessType||'Business Type'}  required />
        <Form.Group  widths='2'>
          <Form.Field>
          <label>Restaurant or Supplier - Please Pick One</label>
            <Form.Group  inline >
              <Form.Checkbox className={classnames({'error': errors.userRestaurant})} label='Restaurant'  name='userRestaurant' required />
              <Form.Checkbox className={classnames({'error': errors.userSupplier})} label='Supplier'  name='userSupplier' required />
            </Form.Group>
            <label>Region - Please Pick One</label>
            <Form.Group  inline >
              <Form.Checkbox className={classnames({'error': errors.northNevada})} label='Northern Nevada'  name='northNevada' required />
              <Form.Checkbox className={classnames({'error': errors.southNevada})} label='Southern Nevada'  name='southNevada' required />
            </Form.Group>
          </Form.Field>
        </Form.Group>
        <Form.TextArea  name='details' label='Details' placeholder='Anything else we should know?' rows='3'  />
        <Form.Checkbox className={classnames({'error': errors.terms})} name='terms'  label='I agree to the Terms and Conditions' required/>
        <Button primary type='submit'>Submit</Button>
      </Form>
      </Container>
</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        supplierSignupRequest: supplierSignupRequest(state)
    };
}

SupplierSignup.propTypes = {
    supplierSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { supplierSignupRequest })(SupplierSignup);
