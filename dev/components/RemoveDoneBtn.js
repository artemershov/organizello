import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default class RemoveDoneBtn extends React.Component {
  removeDone = () => {
    if (confirm('Удалить все завершенные задачи?')) {
      this.props.actions.removeDone();
    }
  };
  render = () => (
    <Button outline color="light" onClick={this.removeDone}>
      <FontAwesomeIcon icon={faTrashAlt} /> Удалить завершенные задачи
    </Button>
  );
}
