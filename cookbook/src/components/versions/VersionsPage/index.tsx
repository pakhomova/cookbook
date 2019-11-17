import React, { Component } from 'react';
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
import * as endpoints from '../../../constants/endpoints';
import { findIdFromUrl, Params } from '../../../helpers/router';

class VersionsPage extends Component<IVersionsPageProps> {
  componentDidMount = () => {
    this.props.getVersions(endpoints.ALL_VERSIONS + findIdFromUrl(this.props.match.params as Params));
  };

  render() {
    if (this.props.isLoading) return <LoadingMessage />;
    else if (this.props.hasErrored) return <ErrorMessage />;
    return (
      <>
        <Header headerText={'Versions of recipe '} />
        <LeftButton title="Back to recipes page" onClick={this.onBackButtonClick} />
        {this.props.versions.map((version: IVersion) => (
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
