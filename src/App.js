import './App.css';
import './components/searcher'
//import Searcher from './components/searcher'
import DocumentList from './components/documentList'

const documents = [
  {
    id:1,
    numOf:'03-BS-001',
    promovente:'Fulanito de Tal',
    tipo: 'Requerimiento'
  },
  {
    id:2,
    numOf:'03-BS-002',
    promovente:'Ricardito',
    tipo: 'Resolutivo'
  },
  {
    id:3,
    numOf:'IA.246/21',
    promovente:'Fulanito de Tal',
    tipo: 'Requerimiento'
  }
]

function App() {
  return (
    <div className="App">
     <h1>Buscar Oficio</h1>
     <div>
        <input type='text'></input>
        <button>Buscar</button>
    </div>
     <hr/>
     <DocumentList docs={documents}></DocumentList>
    </div>
  );
}

export default App;
