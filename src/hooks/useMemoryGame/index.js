import { useState } from "react";
import { useCallback } from "react";

export function useMemoryGame(cards) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [memorizedCards, setMemorizedCards] = useState([]);
  const [steps, setSteps] = useState(0);

  function flipCard(card) {
    setFlippedCards((prevfFlippedCards) => [...prevfFlippedCards, card]);
  }

  const unflippCard = useCallback(() => {
    setFlippedCards([]);
  }, [setFlippedCards]);

  const isFlipped = useCallback(
    (card) => {
      return !!flippedCards.find((c) => c.id === card.id);
    },
    [flippedCards]
  );

  const isMemorized = useCallback(
    (card) => {
      return memorizedCards.find((c) => c.id === card.id);
    },
    [memorizedCards]
  );

  const gameOver = memorizedCards.length === cards.length;

  function resetGame() {
    window.location.reload();
  }

  const handleCardClick = useCallback(
    (card) => {
      if (flippedCards.length < 2) {
        flipCard(card);
      }
      setSteps(steps + 1);
    },
    [flippedCards]
  );

  const checkIfTheFlippedCardsMatches = useCallback(() => {
    const [firstCard, secondCard] = flippedCards;
    return firstCard.value === secondCard.value;
  }, [flippedCards]);

  const handleMatchCards = useCallback(() => {
    setMemorizedCards((prev) => [...prev, ...flippedCards]);
  }, [setMemorizedCards, flippedCards]);

  return {
    handleCardClick,
    unflippCard,
    isFlipped,
    gameOver,
    resetGame,
    isMemorized,
    checkIfTheFlippedCardsMatches,
    handleMatchCards,
    steps,
    flippedCards,
  };
}
