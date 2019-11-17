import React, { Component } from 'react';
import { styles } from './styles';
import withStyles from 'react-jss';
import ITextAreaProps from '../../../abstraction/components/common/TextArea/ITextAreaProps';

class TextArea extends Component<ITextAreaProps> {
  render() {
    return (
      <div className={this.props.classes.container}>
        <textarea {...this.props} />
      </div>
    );
  }
}

export default withStyles(styles)(TextArea);
