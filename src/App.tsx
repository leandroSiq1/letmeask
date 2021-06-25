import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';
import { GlobalStyle } from './styles/global.js';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room/Room";
import { AdminRoom } from './pages/AdminRoom';

import { Actions } from './components/Actions';

import { AuthContextProvider } from './contexts/AuthContext';

export default function App() { 
  const [theme, setTheme] = usePersistedState('theme:letmeask', dark);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
          </Switch>
          <ToastContainer autoClose={3000} />
          <Actions toggleTheme={toggleTheme} />
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}