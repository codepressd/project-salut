import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import BackEndHeader from './components/Header/BackendHeader';
import FrontEndHeader from './components/Header/FrontEndHeader';
//import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

//two headers

 

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false };
    }

    componentDidMount() {
        this.setState({ isMounted: true }); // eslint-disable-line
    }

    toggleAddPostSection = () => {
        this.props.dispatch(toggleAddPost());
    };

    render() {
        const Header = ({activeUser: {user}}) => user ? <BackEndHeader {...this.props} /> : <FrontEndHeader {...this.props} />;
        return (
            <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Salut.io - Universal Ordering"
            titleTemplate="%s - Salut.io"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header activeUser={this.props.activeUser} {...this.props} />
          {/*<Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />*/}
          <div className={styles.container}>
            {React.cloneElement(this.props.children, this.props)}
          </div>
          <Footer />
        </div>
      </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        intl: store.intl,
        activeUser: store.ActiveUser
    };
}

export default connect(mapStateToProps)(App);
