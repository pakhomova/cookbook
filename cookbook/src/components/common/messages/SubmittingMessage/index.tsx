import React, { Component } from 'react';
import Message from '../Message';

const messageText = 'Submitting...';

export default class SubmittingMessage extends Component {
  render() {
    return <Message messageText={messageText} />;
  }
}
