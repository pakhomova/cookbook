import React, {Component} from 'react';
import withStyles, {WithStyles} from 'react-jss';
import {styles} from './styles';

class BlockContainer extends Component<WithStyles<any>> {
    render() {
        return(
            <div className={this.props.classes.container}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(BlockContainer);