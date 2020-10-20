import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      {/* todo componente dentro de authContext vai ter a autenticação */}
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
