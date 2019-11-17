import React, { Component } from 'react';
import { styles } from './styles';
import withStyles from 'react-jss';
import IHeaderProps from '../../../abstraction/components/common/Header/IHeaderProps';

class Header extends Component<IHeaderProps> {
  render() {
    return (
      <header>
        <h1 className={this.props.classes.header}>{this.props.headerText}</h1>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
