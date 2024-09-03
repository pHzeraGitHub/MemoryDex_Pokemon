import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Card } from '../../components/Card';
import { GameOverModal } from '../../components/GameOverModal';
import { cards } from '../../cards';
import { useMemoryGame } from '../../hooks/useMemoryGame';

export function Game() {
  const {
    checkIfTheFlippedCardsMatches,
    gameOver,
    handleCardClick,
    handleMatchCards,
    isFlipped,
    isMemorized,
    resetGame,
    steps,
    unflippCard,
    flippedCards,
  } = useMemoryGame(cards);

  const [isGameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const matched = checkIfTheFlippedCardsMatches();
      if (matched) {
        handleMatchCards();
      }
      setTimeout(unflippCard, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (gameOver) {
      setGameOver(true);
      saveResult(steps); // Salva o resultado quando o jogo termina
    }
  }, [gameOver]);

  function saveResult(steps) {
    const existingResults = JSON.parse(localStorage.getItem('gameResults')) || [];
    existingResults.push({ steps, date: new Date().toISOString() });
    localStorage.setItem('gameResults', JSON.stringify(existingResults));
  }

  return (
    <>
      <GameOverModal 
        show={isGameOver} 
        steps={steps} 
        onPlayAgain={() => {
          resetGame();
          setGameOver(false); // Resetando o estado do jogo
        }}
      />
      <div className={styles.game}>
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              flipped={isFlipped(card)}
              image={card.image}
              memorized={isMemorized(card)}
              handleClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
