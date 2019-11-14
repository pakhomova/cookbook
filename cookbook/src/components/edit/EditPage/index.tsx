import React, {Component} from 'react';
import Header from '../../common/Header';
import LeftButton from '../../common/buttons/LeftButton';
import routes from '../../../constants/routes.json';
import {withRouter} from 'react-router-dom';
import {findIdFromUrl, Params} from '../../../helpers/router';
import IEditPageState from '../../../abstraction/components/edit/EditPage/IEditPageState';
import TextArea from '../../common/TextArea';
import IEditPageProps from '../../../abstraction/components/edit/EditPage/IEditPageProps';
import SubmittingMessage from '../../common/messages/SubmittingMessage';
import ErrorMessage from '../../common/messages/ErrorMessage';
import {createDescriptionToPost} from '../../../helpers/server';
import IRecipeWithLastVersion from '../../../abstraction/common/IRecipeWithLastVersion';

class EditPage extends Component<IEditPageProps, IEditPageState> {

    constructor(props: IEditPageProps) {
        super(props);

        const id = findIdFromUrl(this.props.match.params as Params);
        const isEditing = typeof id === 'string';
        this.state = {
            isEditing: isEditing,
            id: id,
            inputValue: ''
        }
    };

    componentDidMount = () => {
        console.log('Props: ', this.props);
        this.props.editPageMounted();
        this.setState({
            inputValue: this.getInitialInputValue(this.state.isEditing, this.state.id)
        })
    };

    componentDidUpdate = () => {
        this.props.submittingSuccess &&
        this.props.history.push(routes.HOME);
    }

    render() {
        if(this.props.isSubmitting) return <SubmittingMessage />;
        else if(this.props.hasErrored) return <ErrorMessage />;
        return(
            <>
                <Header headerText={this.state.isEditing ?
                    'Edit recipe ' : 'Add new recipe'}
                />
                <TextArea
                    rows={15}
                    placeholder='Enter recipe description'
                    value={this.state.inputValue}
                    onChange={this.onInputChange}
                />
                <LeftButton
                    title='Submit'
                    onClick={this.onButtonClick}
                    disabled={this.isInputFieldEmpty()}
                />
            </>
        );
    };

    onButtonClick = (event: React.MouseEvent) => {
        this.props.postVersion('', createDescriptionToPost(this.state.inputValue)); // add endpoint
    };

    onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    isInputFieldEmpty = () => (
        !this.state.inputValue.trim()
    );

    getInitialInputValue = (isEditing: boolean, id: string | undefined) => {
        if(isEditing) {
            let currentRecipe = this.props.recipesWithLastVersions.find((
                recipe: IRecipeWithLastVersion
                ) => (
                    recipe.id === id
                ));
            if(typeof currentRecipe === 'undefined') return '';
            return currentRecipe.version.description;
        }
        return '';
    };
}

export default withRouter(EditPage);