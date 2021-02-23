import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css'; //CSS sempre será importado através do JavaScript

//Componente App

/* Obs: Vários elementos em sequência exigem um elemento em volta deles (div) */
function App() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
}

export default App;
