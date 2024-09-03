import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import pokemonImg from "../../assets/pokemon.png";
import logo from "../../assets/logo.svg";

import styles from "./styles.module.css";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/game";

  const { signin } = useAuth();  // Obtenha a função signin do contexto de autenticação

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = { name: formData.get("username") };

    /*
      Autentique o usuário e redirecione ele para a constante "from" declarada acima.
      Dica: utilize o hook useAuth para realizar a autenticação do usuário.
      Dica: Lembre-se de redirecionar o usuário para a constante "from" usando o navigate com a opção replace: true.
      Lembre-se que a função signin recebe dois parâmetros, o primeiro o usuário e o segundo uma função callback.
      Utilize a callback para redirecionar o usuário
     */

    signin(user, () => {
      navigate(from, { replace: true });  // Redirecione o usuário para a página de origem ou para /game
    });
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <main className={styles.login}>
          <img src={logo} alt="Memoridex" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de usuário</label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"
            />
            <button type="submit">Jogar</button>
          </form>
        </main>

        <aside>
          <img src={pokemonImg} alt="pokemon background" />
        </aside>
      </div>
    </div>
  );
}
