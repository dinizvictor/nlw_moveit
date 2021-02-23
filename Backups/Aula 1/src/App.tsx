import { Button } from "./components/Button"

import './styles/global.css'; //CSS sempre será importado através do JavaScript

//Componente App

/* Obs: Vários elementos em sequência exigem um elemento em volta deles (div) */
function App() {
  return (
    <div>
      <Button color="red">
        Botão 1 {/* Children - algo que é passado dentro do componente */}
      </Button>
      <Button color="blue">
        Botão 2
      </Button>
      <Button color="green">
        Botão 3
      </Button>
    </div>
  );
}

export default App;
