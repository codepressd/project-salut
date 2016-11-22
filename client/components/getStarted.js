import React from 'react';
import {browserHistory} from 'react-router';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';


const getStarted = () => (
  <Modal trigger={<Button className='transparent'>Get Started</Button>} basic size='small'>
    <Header as='h2' icon='users' textAlign='center' content='What Type Of Account Are You:' />
    <Modal.Actions>
      <Button onClick={browserHistory.push('/restaurant')} basic color='red' size='huge' inverted>
        <Icon name='fire' /> Restaurant
      </Button>
      <Button onClick={browserHistory.push('/supplier')} color='green' size='huge' inverted>
        <Icon name='shipping' /> Supplier
      </Button>
    </Modal.Actions>
  </Modal>
)

export default getStarted;