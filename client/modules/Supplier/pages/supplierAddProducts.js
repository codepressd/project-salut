import React, { PropTypes } from 'react';
import { Container, Grid, Image, Form, Input, Divider, Checkbox, Select, Radio, Button, Label } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import SideMenu from '../components/SupplierMenu';
import styles from '../supplier.css';

const categoryType = [
    { text: 'Produce', value: 'produce' },
    { text: 'Meat', value: 'meat' },
    { text: 'Dry Goods', value: 'dry-goods' },
    { text: 'Packaged Goods', value: 'package-goods' },
    { text: 'Wine', value: 'wine' },
    { text: 'Liqour', value: 'liquor' },
    { text: 'Beer', value: 'beer' },
    { text: 'Non-Alcoholic Beverages', value: 'non-alcoholic-beverages' },
]

const CLOUDINARY_UPLOAD_PRESET = 'rsli2gdp';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/drzvy00ww/image/upload';

class SupplierAddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	uploadedFileCloudinaryUrl: ' '
        }
       this.onDrop = this.onDrop.bind(this);
    }
    onDrop(acceptedFile, rejectedFile) {
    	console.log('acceptedFile', acceptedFile);
    	console.log('rejectedFile', rejectedFile);
	    // this.setState({
	    //   uploadedFile: files[0]
	    // });
	   // this.handleImageUpload(files[0]);
    }

    // handleImageUpload(file){
    // 	//console.log('handle Image', file);
    // 	let upload = request.post(CLOUDINARY_UPLOAD_URL)
    // 				.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    // 				.field('file', file);
    // 	upload.end((err, response) => {
	   //  	if(err){
	   //  		console.error(err);
	   //  	}
	   //  	if(response.body.secure_url !== ' ') {
	   //  		this.setState({
	   //  			uploadedFileCloudinaryUrl: response.body.secure_url
	   //  		});
	   //  	}
    // 	});
    	
    // }
    handleSubmit = (e, serializedForm) => {
        e.preventDefault();


    }
    render() {
        	const userInfo = this.props.activeUser.user;
        	
        return (
            <div className={styles.pageWrap}>
				<div className={styles.navWrap}>
					<SideMenu {...this.props} />
				</div>
				<div className={styles.contentWrap}>
					 <Container className={styles.formDash}>
					 <h2>{userInfo.companyName} : Add Product</h2>
					 	<Dropzone disableClick={true} multiple={false} accept={'image/*'} onDrop= {this.dropHandler}>
					 	<p>Drop a photo, or click to add.</p>
					 	</Dropzone>

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
