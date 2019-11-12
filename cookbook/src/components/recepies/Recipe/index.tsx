import React, {Component} from 'react';
import {styles} from './styles';
import withStyles from 'react-jss';
import IRecipeProps from '../../../abstraction/components/recepies/Recipe/IRecipeProps';
import Version from '../../common/Version';
import ControllersBlock from '../ControllersBlock';

class Recipe extends Component<IRecipeProps> {
    render() {
        return(
            <div className={this.props.classes.container}>
                <div className={this.props.classes.header}>
                    <p>Recipe {this.props.id + 1}</p>
                    <ControllersBlock recipeId={this.props.id} />
                </div>
                <Version {...this.props.version} />
            </div>
        );
    }
}

export default withStyles(styles)(Recipe);