import React, { Component } from 'react';
import { styles } from './styles';
import withStyles from 'react-jss';
import IButtonProps from '../../../../abstraction/components/common/Button/IButtonProps';

class Button extends Component<IButtonProps> {
  render() {
    return (
      <button className={this.props.classes.button} {...this.props}>
        {this.props.title}
      </button>
    );
  }
}

export default withStyles(styles)(Button);
