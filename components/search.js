import React from 'react';
import { Button, Form, Select } from 'semantic-ui-react';

const options = [
  { key: 'all', text: 'All Videos', value: 'all' },
  { key: 'category', text: 'By Category', value: 'category' },
];

class SearchBar extends React.Component {
  state = { query: '' }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { query, category } = this.state;
    this.props.onSubmit(query, category);
  }

  render() {
    const { onSubmit, loading } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
         <Form.Input
            onChange={this.handleChange}
            name="query"
            type="text"
            placeholder="Search..."
            disabled={loading}
            action>
            <input/>
            <Select compact options={options} defaultValue='all' />
            <Button type="Submit">Search</Button>
         </Form.Input>
      </Form>
    );
  }
}

export default SearchBar;
