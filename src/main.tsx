import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'inversify-react'
import "reflect-metadata";
import { QueryClientProvider } from 'react-query'
import { injectContainer } from './inject.ts'
import { queryClient } from './query.ts'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider container={injectContainer}>
          <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
