import React, {Component} from 'react';
import {styles} from './styles';
import withStyles, { WithStyles } from 'react-jss';

class Header extends Component<WithStyles<any>> {
    render() {

        return(
            <header>
                <h1 className={this.props.classes.header}>
                    {this.props.children}
                </h1>
            </header>
        );
    }
}

export default withStyles(styles)(Header);