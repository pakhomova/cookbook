import React, {Component} from 'react';
import Header from '../../common/Header';
import Version from '../../common/Version';
import LeftButton from '../../common/buttons/LeftButton';
import BlockContainer from '../../common/BlockContainer';
import IVersion from '../../../abstraction/common/IVersion';
import routes from '../../../constants/routes.json';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import IVersionsPageState from '../../../abstraction/components/versions/VersionsPage/IVersionsPageState';
import {findIdFromUrl, Params} from '../../../helpers/router';

const versions: IVersion[] = [
    {
        date: new Date(1993, 6, 28, 14, 39, 7),
        description: 'In a medium bowl, mix all the marinade ingredients with some seasoning. Chop the chicken into bite-sized pieces and toss with the marinade. Cover and chill in the fridge for 1 hr or overnight.'
    },
    {
        date: new Date(1997, 12, 8, 12, 25, 4),
        description: 'In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft.'
    },
    {
        date: new Date(2005, 4, 15, 8, 10, 34),
        description: 'Add the spices with the tomato purée, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like.'
    }
];

class VersionsPage extends Component<RouteComponentProps, IVersionsPageState> {
    
    constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            id: findIdFromUrl(this.props.match.params as Params)
        }
    }

    render() {
        return(
            <>
                <Header headerText={'Versions of recipe ' + (this.state.id + 1)} />
                <LeftButton title='Back to recepies page' onClick={this.onBackButtonClick} />
                {versions.map((version: IVersion) => (
                    <BlockContainer key={version.date.toString()}>
                        <Version {...version} />
                    </BlockContainer>
                ))}
            </>
        );
    }

    onBackButtonClick = (event: React.MouseEvent) => {
        this.props.history.push(routes.HOME);
    };
}

export default withRouter(VersionsPage);