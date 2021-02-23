import React from 'react'; //Importando o React
import ReactDOM from 'react-dom'; //DOM - Arvore de elementos do HTML >> Utilizada pelo React na WEB.
import App from './App';

//JSX, TSX: JavaScript ou TypeScript com XML.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //Ache o elemento de id root (div) e adicione o componente <App /> a ele.
);