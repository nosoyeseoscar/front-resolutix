import './App.css';
import './components/searcher'
//import Searcher from './components/searcher'
import DocumentList from './components/documentList'

/*Hooks*/
import {useState} from 'react'
import {useEffect} from 'react'
 
const documentsTest = [
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
  const [doctos, setDoctos] = useState([])
  const [search, newSearch] = useState([])

  useEffect(() => {
    setDoctos(documentsTest)
    console.log('se activa UseEfect');
  }, [search])

  return (
    <div className="App">
     <h1>Buscar Oficio</h1>
     <div>
        <input type='text'></input>
        <button>Buscar</button>
    </div>
     <hr/>
     <DocumentList docs={doctos}></DocumentList>
    </div>
  );
}

export default App;
