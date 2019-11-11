import React, {Component} from 'react';
import {styles} from './styles';
import {createUseStyles} from 'react-jss';
import Header from '../../common/Header';

const useStyles = createUseStyles(styles);

export default class RecepiesPage extends Component {
    render() {
        return(
            <div>
                <Header>
                    Header
                </Header>
            </div>
        );
    }
}