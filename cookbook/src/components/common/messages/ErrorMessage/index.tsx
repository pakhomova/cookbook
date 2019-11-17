import React, { Component } from 'react';
import Message from '../Message';

const messageText = 'Ups, something went wrong... you have an error!';

export default class ErrorMessage extends Component {
  render() {
    return <Message messageText={messageText} />;
  }
}
