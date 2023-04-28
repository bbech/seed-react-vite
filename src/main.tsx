import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider as InjectionProvider } from 'inversify-react'
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import "reflect-metadata";
import { QueryClientProvider } from 'react-query'
import { injectContainer } from './inject.ts'
import { queryClient } from './query.ts'
import { store } from './store/configureStore.ts'
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <InjectionProvider container={injectContainer}>
          <RouterProvider router={router} />
        </InjectionProvider>
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
