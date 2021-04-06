import React, { Component } from 'react';
import './CardRepo.css';

class CardRepo extends Component {
  render() {
    const { repo } = this.props;
    const created_at = new Date(repo.created_at)
    const updated_at = new Date(repo.updated_at)
    return (
      <div className="card">
        <p>Nome: { repo.name }</p>
        <p>Numero de forks: { repo.forks }</p>
        <p>Linguagem: { repo.languages || '-' }</p>
        <p>Issues: { repo.open_issues }</p>
        <p>Tamanho: { repo.size }</p>
        <p>Criado em: { created_at.toLocaleDateString('pt-BR') }</p>
        <p>Atualizado em: { updated_at.toLocaleDateString('pt-BR') }</p>
        <a href={ repo.html_url } target="_blanck">Veja aqui</a>
      </div>
    );
  }
}

export default CardRepo;