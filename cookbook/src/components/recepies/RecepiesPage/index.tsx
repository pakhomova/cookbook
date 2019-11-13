import React, {Component} from 'react';
import Header from '../../common/Header';
import IRecipeWithLastVersion from '../../../abstraction/common/IRecipeWithLastVersion';
import Recipe from '../Recipe';
import LeftButton from '../../common/buttons/LeftButton';
import LoadingMessage from '../../common/messages/LoadingMessage';
import ErrorMessage from '../../common/messages/ErrorMessage';
import routes from '../../../constants/routes.json';
import {withRouter} from 'react-router-dom';
import IRecepiesPageProps from '../../../abstraction/components/recepies/RecepiesPage/IRecepiesPageProps';

const recepies: IRecipeWithLastVersion[] = [
    {id: 0,
    version: {
        date: new Date(1993, 6, 28, 14, 39, 7),
        description: 'In a medium bowl, mix all the marinade ingredients with some seasoning. Chop the chicken into bite-sized pieces and toss with the marinade. Cover and chill in the fridge for 1 hr or overnight.'
        }
    },
    {id: 1,
        version: {
            date: new Date(1997, 12, 8, 12, 25, 4),
            description: 'In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft.'
        }
    },
    {id: 2,
        version: {
            date: new Date(2005, 4, 15, 8, 10, 34),
            description: 'Add the spices with the tomato purée, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like.'
        }
    }
];

class RecepiesPage extends Component<IRecepiesPageProps> {

    componentDidMount = () => {
        this.props.getRecepies('');
    };

    render() {
        return(
            <>
                <Header headerText='Recepies' />
                <LeftButton title='Add recipe' onClick={this.onAddButtonClick} />
                {recepies.map((recipe: IRecipeWithLastVersion) => (
                    <Recipe key={recipe.id} id={recipe.id} version={recipe.version} />
                ))}
            </>
        );
    }

    onAddButtonClick = (event: React.MouseEvent) => {
        this.props.history.push(routes.ADD);
    };
}

export default withRouter(RecepiesPage);