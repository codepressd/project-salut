import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';
import styles from './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../components/actions/authActions';

class BackEndHeader extends React.Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  this.props.logoutUser;
  console.log('this is firing');
}

  render(){
    console.log(this.context);
    return(
      <div className={styles.header}>
        <Menu className={styles.navColor} pointing secondary>
        <span className={styles.myBrand}>Salut.io</span>
         <Menu.Item name='home' active={this.context.router.isActive('/', true)} onClick={()=> browserHistory.push('/')} />
          <Menu.Item name='About' active={this.context.router.isActive('/About', true)} onClick={()=> browserHistory.push('/about')} />
          <Menu.Item name='FAQ'  active={this.context.router.isActive('/faq', true)} onClick={()=> browserHistory.push('/faq')} />
          <Menu.Menu position='right'>
          {/* <Menu.Item name='Profile'  active={context.router.isActive('/'+props.activeUser.user.role+'/dashboard/'+props.activeUser.user.id+'/profile', true)} onClick={()=> browserHistory.push('/'+props.activeUser.user.role+'/dashboard/'+props.activeUser.user.id+'/profile')} />*/}
            <Menu.Item name='Logout'  onClick={this.handleClick} />
          </Menu.Menu>
        </Menu>
    </div>
      )
  }
}


BackEndHeader.contextTypes = {
  router: React.PropTypes.object,
};

const mapStateToProps = function(state){
  return{
    activeUser: state.ActiveUser,
    logoutUser: logoutUser
  }
}

export default connect(mapStateToProps)(BackEndHeader);