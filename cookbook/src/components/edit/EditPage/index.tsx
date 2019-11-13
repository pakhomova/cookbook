import React, {Component} from 'react';
import Header from '../../common/Header';
import LeftButton from '../../common/buttons/LeftButton';
import routes from '../../../constants/routes.json';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {findIdFromUrl, Params} from '../../../helpers/router';
import IEditPageState from '../../../abstraction/components/edit/EditPage/IEditPageState';
import TextArea from '../../common/TextArea';

class EditPage extends Component<RouteComponentProps, IEditPageState> {

    constructor(props: RouteComponentProps) {
        super(props);

        const id = findIdFromUrl(this.props.match.params as Params);
        this.state = {
            isEditing: typeof id === 'number' ? true : false,
            id: id,
            inputValue: '' // if isEditing, get description from redux
        }
    };

    render() {
        return(
            <>
                <Header headerText={this.state.isEditing ?
                    'Edit recipe ' + (this.state.id! + 1) : 'Add new recipe'}
                />
                    <TextArea
                        rows={15}
                        placeholder='Enter recipe description'
                        value={this.state.inputValue}
                        onValueChange={this.onInputChange}
                    />
                <LeftButton
                    title='Save'
                    onClick={this.onButtonClick}
                />
            </>
        );
    };

    onButtonClick = (event: React.MouseEvent) => {
        this.props.history.push(routes.HOME);
    };

    onInputChange = (newValue: string) => {
        this.setState({
            inputValue: newValue
        });
    };
}

export default withRouter(EditPage);