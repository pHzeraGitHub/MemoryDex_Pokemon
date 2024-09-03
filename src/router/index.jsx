import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Game } from "../pages/Game";
import { Ranking } from "../pages/Ranking";
import { Layout } from "../components/Layout";
import { Error } from "../pages/Error";
import { Login } from "../pages/Login";  // Certifique-se de que o caminho está correto
import { useAuth } from "../hooks/useAuth";  // Certifique-se de que o caminho está correto

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,  // Redireciona a raiz para a página de login
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,  // Página de login adicionada aqui
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/ranking",
        element: (
          <RequiredAuth>
            <Ranking />
          </RequiredAuth>
        ),
      },
    ],
  },
]);

function RequiredAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();  // Obtém o estado de autenticação do usuário

  if (!user) {
    // Se o usuário não estiver logado, redireciona para a página de login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se o usuário estiver logado, permite o acesso à rota solicitada
  return children;
}

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
