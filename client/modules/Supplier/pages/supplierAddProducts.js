import React, { PropTypes } from 'react';
import { Container, Grid, Image, Form, Input, Divider, Checkbox, Select, Radio, Button, Label } from 'semantic-ui-react';

import SideMenu from '../components/SupplierMenu';
import styles from '../supplier.css';

const categoryType = [
  { text: 'Produce', value: 'produce' },
  { text: 'Meat', value: 'meat' },
  { text: 'Dry Goods', value: 'dry-goods' },
  { text: 'Packaged Goods', value: 'package-goods' },
  { text: 'Wine', value: 'wine' },
  { text:'Liqour', value: 'liquor'},
  { text: 'Beer', value: 'beer' },
  { text: 'Non-Alcoholic Beverages', value: 'non-alcoholic-beverages' },
]

class SupplierAddProducts extends React.Component{
	handleSubmit = (e, serializedForm) =>{
		e.preventDefault();
		console.log(serializedForm);

	}
	render(){
		
		return(
			<div className={styles.pageWrap}>
				<div className={styles.navWrap}>
					<SideMenu {...this.props} />
				</div>
				<div className={styles.contentWrap}>
					 <Container className={styles.formDash}>
					 <h2>Supplier's Name : Add Product</h2>
					       <Form onSubmit={this.handleSubmit}>
					      
					          <Form.Input label='Name Of Product' name='product-name' placeholder='Product Name' />
					          <h4>Individual Price</h4>
					          <Form.Group>
					           <Input label='$' name='ind-price' placeholder='Amount'/>
					            </Form.Group>
					            <h4>Case Price</h4>
					            <Form.Group>
					           <Input label='$' name='case-price' placeholder='Amount'/>
					            </Form.Group> 
					          <Form.TextArea name='product-short-description' label='Short Description' placeholder='Quick and to the point..' rows='3' />
					           <Form.TextArea name='product-description' label='Product Description' placeholder='Describe the product in depth.' rows='3' />
					       
					        <Divider section />
					       
					        <Form.Group widths='2'>
					          <Form.Field>
					            <h2>Pick One  General Category</h2>
					            <Form.Select label='Product Type' name='productType' options={categoryType} placeholder='Product Type' />
					          </Form.Field>
					        </Form.Group>
					        <Button primary type='submit'>Add Product</Button>
					      </Form>
					</Container>
				</div>
			</div>

		)
	}

}

export default SupplierAddProducts;