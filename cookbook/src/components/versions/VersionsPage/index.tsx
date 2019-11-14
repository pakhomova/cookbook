import React, {Component} from 'react';
import Header from '../../common/Header';
import Version from '../../common/Version';
import LeftButton from '../../common/buttons/LeftButton';
import BlockContainer from '../../common/BlockContainer';
import IVersion from '../../../abstraction/common/IVersion';
import routes from '../../../constants/routes.json';
import IVersionsPageProps from '../../../abstraction/components/versions/VersionsPage/IVersionsPageProps';
import LoadingMessage from '../../common/messages/LoadingMessage';
import ErrorMessage from '../../common/messages/ErrorMessage';
import { withRouter } from 'react-router';

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

class VersionsPage extends Component<IVersionsPageProps> {

    componentDidMount = () => {
        //this.props.getVersions('');
    };

    render() {
        if(this.props.isLoading) return <LoadingMessage />;
        else if(this.props.hasErrored) return <ErrorMessage />;
        return(
            <>
                <Header headerText={'Versions of recipe '} />
                <LeftButton title='Back to recipes page' onClick={this.onBackButtonClick} />
                {versions.map((version: IVersion) => (
                    <BlockContainer key={version.date.toString()}>
                        <Version {...version} />
                    </BlockContainer>
                ))}
            </>
        );
    };

    onBackButtonClick = (event: React.MouseEvent) => {
        this.props.history.push(routes.HOME);
    };
}

export default withRouter(VersionsPage);