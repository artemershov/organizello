import React from 'react';
import { Form, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

export default class EditForm extends React.Component {
  state = {
    data: this.props.data.title,
  };
  change = e => {
    const data = e.target.value;
    this.setState({ data });
  };
  submit = e => {
    e.preventDefault();
    if (this.props.data.title !== this.state.data) {
      const todo = { ...this.props.data, title: this.state.data };
      this.props.submit(todo);
    }
    this.props.cancel();
  };
  render = () => (
    <Form onSubmit={this.submit}>
      <InputGroup>
        <Input
          onChange={this.change}
          value={this.state.data}
          maxLength="200"
          required
          placeholder="Название задачи"
        />
        <InputGroupAddon addonType="append">
          <Button outline color="secondary">
            <i className="icon-ok" />
          </Button>
          <Button outline color="secondary" onClick={this.props.cancel}>
            <i className="icon-cancel" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}
