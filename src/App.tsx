import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* todo componente dentro de authContext vai ter a autenticação */}
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
