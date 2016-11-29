import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {supplierSignupRequest} from '../actions/supplierSignupActions';
import { Container, Header, Icon, Grid, Image, Button, Checkbox, Form, Input, Message, Radio, Select, TextArea, Divider  } from 'semantic-ui-react';


// Import Style
import styles from '../supplier.css';

const supplyType = [
  { text: '', value: '' },
  { text: 'Farmer', value: 'farmer' },
  { text: 'Rancher', value: 'rancher' },
  { text: 'Co-op', value: 'co-op' },
  { text: 'Food Distributor', value: 'food-distributor' },
  { text: 'Produce Distributor', value: 'produce-distributor' },
  { text:'Wine Distributor', value: 'wine-distributor'},
  { text: 'Liqour Distributor', value: 'liqour-distributor' },
]

class SupplierSignup extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e, data) {

    e.preventDefault();
    this.props.supplierSignupRequest(data).then(console.log(response));
  }
  render(){

    return(
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
       <Form.Group  widths='equal'>
          <Form.Input label='Username'  name='username' placeholder='Username' required/>
          <Form.Input label='Email'  name='email' placeholder='Email' />
        </Form.Group>
         <Form.Input label='Password'  name='password' placeholder='Password' />
          <Form.Input label='Password Confirm'  name='passwordConfirm' placeholder='Confrim Password' />
        <Form.Group className={styles.group} widths='equal'>
          <Form.Input label='First Name'  name='firstName' placeholder='First Name' />
          <Form.Input label='Last Name'  name='lastName' placeholder='Last Name' />
          <Form.Input label='Company Name'  name='companyName' placeholder='Company Name' />
        </Form.Group>
        <Divider horizontal>Your Business Location</Divider>
        <Form.Group className={styles.group} widths='equal'>
          <Form.Input label='Address' name='address' placeholder='Address' />
          <Form.Input label='City'  name='city' placeholder='City' />
          <Form.Input label='State'  name='state' placeholder='State' />
        </Form.Group>
        <Divider section />
        <Form.Select label='Business Type'  name='businessType' options={supplyType} placeholder='Business Type' />
        <Form.Group widths='2'>
          <Form.Field>
            <label>Region - Pick One</label>
            <Form.Group inline>
              <Form.Checkbox label='Northern Nevada'  name='northNevada'  />
              <Form.Checkbox label='Southern Nevada'  name='southNevada'  />
            </Form.Group>
          </Form.Field>
        </Form.Group>
        <Form.TextArea  name='details' label='Details' placeholder='Anything else we should know?' rows='3' />
        <Form.Checkbox  name='terms'  label='I agree to the Terms and Conditions' />
        <Button primary type='submit'>Submit</Button>
      </Form>
      </Container>
    </div>
)}
}

function mapStateToProps(state) {
  return {
    supplierSignupRequest: supplierSignupRequest(state)
  };
}

SupplierSignup.propTypes = {
    supplierSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, {supplierSignupRequest}) (SupplierSignup);