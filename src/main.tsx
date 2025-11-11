/// <reference types="./vite-env" />
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RepositoriesList } from '@features'
import { ErrorBoundary } from '@components'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RepositoriesList />
    </ErrorBoundary>
  </React.StrictMode>,
)

