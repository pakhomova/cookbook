import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes.json';
import {styles} from './styles';
import withStyles from 'react-jss';
import IControllersBlockProps from '../../../abstraction/components/recepies/ControllersBlock/IControllersBlockProps';

class ControllersBlock extends Component<IControllersBlockProps> {
    render() {
        return(
            <div className={this.props.classes.container}>
                <Link
                    className={this.props.classes.navigationLink}
                    to={routes.EDIT + '/' + this.props.recipeId}
                >
                    <i className="material-icons">edit</i>
                </Link>
                <Link
                    className={this.props.classes.navigationLink}
                    to={routes.VERSIONS + '/' + this.props.recipeId}
                >
                    <i className="material-icons">access_time</i>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(ControllersBlock);