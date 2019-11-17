import React, { Component } from 'react';
import { styles } from './styles';
import withStyles from 'react-jss';
import IVersionProps from '../../../abstraction/components/common/Version/IVersionProps';

class Version extends Component<IVersionProps> {
  render() {
    return (
      <div className={this.props.classes.container}>
        <p>Date: {this.props.date.toDateString()}</p>
        <p>
          Time: {this.props.date.getHours()}:{this.props.date.getMinutes()}
        </p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Version);
