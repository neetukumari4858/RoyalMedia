import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {store} from "./redux/app/store";

// import {BrowserRouter as Routers} from "./"

// Call make Server
makeServer()
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ChakraProvider>
      </Provider>
  </React.StrictMode>,
)
