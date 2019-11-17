import React, { Component } from 'react';
import Message from '../Message';

const messageText = 'Loading...';

export default class LoadingMessage extends Component {
  render() {
    return <Message messageText={messageText} />;
  }
}
