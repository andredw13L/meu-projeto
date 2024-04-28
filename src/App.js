import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';



function App() {

  const nome = "Maria"


  return (
    <div className="App">
      <HelloWorld/>
      <h1>Testando CSS</h1>
      <SayMyName nome="André"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>

  );
}

export default App;
