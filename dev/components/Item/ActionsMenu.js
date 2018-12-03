import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons/faEdit';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';

const ActionsMenu = props => (
  <UncontrolledDropdown size="sm" direction="left">
    <DropdownToggle color="link">
      <FontAwesomeIcon icon={faEllipsisV} />
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem onClick={props.actions.edit}>
        <FontAwesomeIcon icon={faEdit} /> Редактировать
      </DropdownItem>
      <DropdownItem onClick={props.actions.remove}>
        <FontAwesomeIcon icon={faTrashAlt} /> Удалить
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default ActionsMenu;
