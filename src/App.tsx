import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterService } from './services/counter.service';
import { useInjection } from 'inversify-react';
import { PetClient } from './services/pets-client.service';
import { useMutation, useQuery } from 'react-query';
import { Pet } from '@publicApi/api';
import { PetClientPrivate } from './services/pets-client-private.service';

function App() {
  const counterService = useInjection(CounterService);
  const petClient = useInjection(PetClient);
  const petClientPrivate = useInjection(PetClientPrivate);

  const [count, setCount] = useState(counterService.getCounter())
  const getQuery = useQuery<Pet>('getPet', petClient.getPet.bind(petClient));
  const getQueryPrivate = useQuery<Pet>('getPetPrivate', petClientPrivate.getPet.bind(petClientPrivate));
  const postQuery = useMutation(petClient.updatePet.bind(petClient));


  useEffect(() => {
    console.log(getQuery.data);
    console.log(getQuery.isLoading);
    console.log(getQuery.isSuccess);
  },[getQuery.data]);

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
      <h1>Vite + React {getQuery.isLoading ? 'loading' : getQuery.data?.name}</h1>
      <div className="card">
        <button onClick={() => { 
              setCount(counterService.hit());
              postQuery.mutate({
                id: 1, name: 'new name',
                photoUrls: []
              });
            }
          }>
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
