import { Profile } from "../../components/Profile";
import styles from "./styles.module.css";

export function Ranking() {
  // Recupera os resultados salvos do localStorage
  const gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];

  return (
    <div className={styles.ranking}>
      <h2>Ranking</h2>
      <main className={styles.profiles}>
        {gameResults.length > 0 ? (
          gameResults.map((result, index) => (
            <Profile 
              key={index}
              name={`Jogador ${index + 1}`}  // Ajuste conforme necessário
              steps={result.steps}
            />
          ))
        ) : (
          <p>Nenhum resultado disponível.</p>
        )}
      </main>
    </div>
  );
}
