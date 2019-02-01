import React, { Fragment } from 'react';
import Header from './Header';
import TaskGroup from './TaskGroup';
import RemoveDoneBtn from './shared/RemoveDoneBtn';
import Container from 'reactstrap/lib/Container';

export default class AppContainer extends React.Component {
  remove = this.props.todoActions('removeDone');
  render = () => (
    <Fragment>
      <Header
        settings={this.props.settings}
        actions={this.props.settingsActions}
      />
      <Container className="pt-5">
        <TaskGroup
          actions={this.props.todoActions}
          groups={this.props.groups}
          groupsActions={this.props.groupsActions} />
        <div className="text-center mb-4">
          <RemoveDoneBtn remove={this.remove} />
        </div>
      </Container>
    </Fragment>
  );
}
