import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      {/* todo componente dentro de authContext vai ter a autenticação */}
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
