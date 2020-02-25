import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: false
    }
   
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    /*  ONE OF THE METHODS TO TOGGLE SIDE-DRAWER----->
    
    toggleSideDrawerHandler = () => {
        let showSideDrawer = null;
        if(this.state.showSideDrawer) {
             showSideDrawer = false;
        }
        else {
            showSideDrawer = true;
        }
        this.setState({
            showSideDrawer: showSideDrawer
        })
        
    }   */

    sideDrawerToggleHandler = () => {                                           /*   SECURE WAY OF ASSIGNING NEW
                                                                                     STATE TO THE PREVIOUS STATE         */
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render() {
        return (
        <Auxiliary>
            <Toolbar drawerToggleCLicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliary>
        );
    }
    
}

export default Layout