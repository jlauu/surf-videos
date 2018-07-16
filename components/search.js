import React from 'react';
import { Button, Dropdown, Form, Select } from 'semantic-ui-react';
import { Youtube } from '../lib/api';

const options = [
  { key: 'all', text: 'All Videos', value: 'all' },
  { key: 'category', text: 'By Category', value: 'category' },
];

class SearchBar extends React.Component {
  state = { query: '', mode: 'all' }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { query, category } = this.state;
    this.props.onSubmit(query, category);
  }

  get isCategory() {
    return this.state.mode === 'category';
  }

  render() {
    const {
       props: { categories, onSubmit, loading },
       isCategory,
    } = this;
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
            <Select compact options={options} defaultValue='all'
              name="mode"
              onChange={this.handleChange}
            />
            <Button type="Submit">Search</Button>
         </Form.Input>
        { isCategory &&
          <Dropdown fluid search selection
            name="category"
            onChange={this.handleChange}
            placeholder="Select Category"
            disabled={loading}
            options={categories}
          />
        }
      </Form>
    );
  }
}

export default SearchBar;
