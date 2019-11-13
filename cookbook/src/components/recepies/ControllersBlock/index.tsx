import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes.json';
import {styles} from './styles';
import withStyles from 'react-jss';
import IControllersBlockProps from '../../../abstraction/components/recepies/ControllersBlock/IControllersBlockProps';

class ControllersBlock extends Component<IControllersBlockProps> {
    render() {
        const classes = this.props.classes;

        return(
            <div className={classes.container}>
                <Link
                    className={classes.navigationLink}
                    to={routes.EDIT + '/' + (this.props.recipeId + 1)}
                >
                    <i className="material-icons">edit</i>
                </Link>
                <Link
                    className={classes.navigationLink}
                    to={routes.VERSIONS + '/' + (this.props.recipeId + 1)}
                >
                    <i className="material-icons">access_time</i>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(ControllersBlock);