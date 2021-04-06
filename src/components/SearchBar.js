import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toSearch: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ toSearch: value });
  }

  handleClick() {
    const { toSearch } = this.state;
    const { searchName } = this.props;
    searchName(toSearch);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Procurar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchName: (name) => dispatch(searchUsers(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
