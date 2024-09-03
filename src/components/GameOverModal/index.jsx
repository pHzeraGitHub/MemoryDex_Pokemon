import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function GameOverModal({ show, steps, onPlayAgain }) {
  const navigate = useNavigate();

  if (!show) return null;

  function handleGoToRanking() {
    navigate('/ranking');
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Parabéns Jogador(a)!</h2>
        <p>Você capturou todos os pokemons em {steps} passos.</p>
        <button onClick={onPlayAgain}>Jogar Novamente</button>
        <button onClick={handleGoToRanking}>Ir para Ranking</button>
      </div>
    </div>
  );
}
