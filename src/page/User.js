import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardRepo from '../components/CardRepo';
import './User.css';

class User extends Component {

  render() {
    const { user, repos, loading } = this.props;
    repos.forEach((repo) => repo.updatedTimeStamp = new Date(repo.updated_at).getTime())
    const repoSorted = repos.sort((repoA, repoB) => repoB.updatedTimeStamp - repoA.updatedTimeStamp);
    if (repoSorted.length > 3) repoSorted.splice(3)
    return (
      <div className="App">
        <Link to="/" className="link">Voltar</Link>
        {loading && <div>...Loading</div>}
        {!loading &&
          <>
            <header>
              <h3>{ user.name }</h3>
            </header>
            <main>
              <a href={ user.html_url } target="_Blanck">
                <img src={ user.avatar_url } alt={ user.login } />
              </a>
              <p>Repositórios</p>
              {repoSorted.length > 0 && 
                <div className="repos"> 
                  { repoSorted.map((repo) => <CardRepo key={ repo.id } repo={ repo } />) }
                </div>
              }
              {repoSorted.length <= 0 && <div>Sem repositórios</div>}
            </main>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.githubSearch.userInfo,
  repos: state.githubSearch.userRepos,
  loading: state.githubSearch.isLoading,
});

export default connect(mapStateToProps)(User);
