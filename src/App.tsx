import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterService } from './services/counter.service';
import { useInjection } from 'inversify-react';
import { PetClient } from './services/pets-client.service';
import { useQuery } from 'react-query';
import { Pet } from '@petapi/api';

function App() {
  const counterService = useInjection(CounterService);
  const petClient = useInjection(PetClient);
  const [count, setCount] = useState(counterService.getCounter())
  const { data, isLoading, isSuccess } = useQuery<Pet>('petById', petClient.getCounter.bind(petClient));


  useEffect(() => {
    console.log(data);
    console.log(isLoading);
    console.log(isSuccess);
  },[data]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {isLoading ? 'loading' : data?.name}</h1>
      <div className="card">
        <button onClick={() => setCount(counterService.hit())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
