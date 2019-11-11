import React, {Component} from 'react';
import {styles} from './styles';
import injectSheet from 'react-jss';

@injectSheet(styles)
export default class Header extends Component {
    render() {

        return(
            <h1>
                {this.props.children}
            </h1>
        );
    }
}