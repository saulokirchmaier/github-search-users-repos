import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userClicked, getUserInfo, getUserRepos } from '../actions';
import './UserList.css';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(user) {
    const { userClick, info, getRepos } = this.props;
    userClick(user);
    info(user.url);
    getRepos(user.repos_url);
  }

  render() {
    const { users, loading } = this.props;
    return (
      <div>
        {loading && <div>...Loading</div>}
        {!loading && 
          <ul>
            {users.map((user) => <li
              onClick={ () => this.handleClick(user) }
              key={ user.id }
            >
              <Link
                to={ `/user/${ user.login }` }
                className="link"
              >
                { user.login }
              </Link>
            </li>)}
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.githubSearch.users,
  loading: state.githubSearch.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  userClick: (user) => dispatch(userClicked(user)),
  info: (userURL) => dispatch(getUserInfo(userURL)),
  getRepos: (repoURL) => dispatch(getUserRepos(repoURL)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
