import './App.css';
import './components/searcher'
//import Searcher from './components/searcher'
import DocumentList from './components/documentList'
import axios from 'axios'

/*Hooks*/
import {useState} from 'react'
import {useEffect} from 'react'

const BASEURL = 'http://localhost:3001/api/documents/'
 
/*const documentsTest = [
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
]*/

function App() {
  const [doctos, setDoctos] = useState([])
  const [search, SetSearch] = useState([])

  useEffect(() => {
    axios.get(BASEURL)
      .then(response => {
        console.log('pido datos al server');
        setDoctos(response.data)
      })
  }, [])

  const handleInputChange = (event)=>{
    SetSearch(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(search);
  }

  return (
    <div className="App">
     <h1>Buscar Oficio</h1>
     <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}></input>
        <button>Buscar</button>
    </form>
     <hr/>
     <DocumentList docs={doctos}></DocumentList>
    </div>
  );
}

export default App;
