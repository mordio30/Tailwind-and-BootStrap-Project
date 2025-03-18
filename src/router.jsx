import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CharactersPage from '../pages/CharactersPage';
import ACharacterPage from '../pages/ACharacterPage';
import FavoriteCharacters from '../pages/FavoriteCharacters';
import NotFoundPage from '../pages/NotFoundPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about/",
        element: <AboutPage />,
      },
      {
        path: "/contact/",
        element: <ContactPage />,
      },
      {
        path: "/characters/",
        element: <CharactersPage />,
      },
      {
        path: "/character/:id/",
        element: <ACharacterPage />,
      },
      {
        path: "/favorites/",
        element: <FavoriteCharacters />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
