import React, { PropTypes } from 'react';
import { Container, Grid, Image, Form, Input, Divider, Checkbox, Select, Radio, Button, Label } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';

import {postProduct} from '../actions/postProduct';
import classnames from 'classnames';
import validateInput from '../../../../server/util/validateSignup';
import SideMenu from '../components/SupplierMenu';
import styles from '../supplier.css';

const categoryType = [
    { text: '', value: '' },
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
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    handleSubmit(e, data){
        e.preventDefault();

        const {uploadedFile, uploadedFileCloudinaryUrl} = this.state;
        const{errors, isValid} = validateInput(data);

        if (!isValid) {
            this.setState({ errors });
        }

        if (isValid) {
         this.setState({
             errors: {},
         });
         data.supplierId = this.props.user.id;
         if (uploadedFile) {
             data.image = uploadedFileCloudinaryUrl;
         }else{
         	data.image='';
         }
     }
     console.log(data);
     this.props.postProduct(data);

    }
    render() {
      const {user} = this.props
      const {errors} = this.state;
      return (
        <div className={styles.pageWrap}>
          <div className={styles.navWrap}>
            <SideMenu {...this.props} />
          </div>
          <div className={styles.contentWrap}>
            <Container className={styles.formDash}>
              <h2>{user.companyName} : Add Product</h2>
              <Grid columns={2} divided>
                <h4>Upload an Image - 200px by 200px works best!</h4>
                <Grid.Row>
                  <Grid.Column>
                    <Dropzone
                      onDrop={this.onImageDrop.bind(this)}
                      multiple={false}
                      accept="image/*">
                      <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                  </Grid.Column>
                  <Grid.Column>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                      <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img className={styles.imageSize} src={this.state.uploadedFileCloudinaryUrl} />
                      </div>}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider hidden />
              <Form onSubmit={this.handleSubmit}>

                <Form.Input label='Name Of Product' className={classnames({'error': errors.productName})} name='productName' placeholder={errors.productName && errors.productName ||'Product Name'}required/>
                <h4>Individual Price</h4>
                <Form.Group>
                  <Input label='$' type='number' className={classnames({'error': errors.unitPrice})} name='unitPrice' placeholder={errors.unitPrice && errors.unitPrice ||'Amount'} required/>
                </Form.Group>
                <h4>Case Price</h4>
                <Form.Group>
                  <Input label='$' type='number' className={classnames({'error': errors.casePrice})} name='casePrice' placeholder={errors.casePrice && errors.casePrice ||'Amount'} required/>
                </Form.Group>
                <Form.TextArea name='productDescription' className={classnames({'error': errors.productDescription})} label='Product Description' placeholder={errors.productDescription && errors.productDescription ||'Describe what you are selling...'} rows='3' required/>

                <Divider section />

                <Form.Group widths='2'>
                  <Form.Field>
                    <h2>Pick One  General Category</h2>
                    <Form.Select label='Product Type' className={classnames({'error': errors.productType})} name='productType' options={categoryType} placeholder={errors.productType && errors.productType ||'Product Type'} required/>
                  </Form.Field>
                </Form.Group>
                <Button primary type='submit'>Add Product</Button>
              </Form>
            </Container>
          </div>
        </div>
      );
    }
}


export default connect(
  state => ({
    user: state.ActiveUser.user
  }),
  {postProduct}
)(SupplierAddProducts);
