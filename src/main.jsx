import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

{/* Redux */}
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import InfoReducer from './redux/InfoReducer.jsx'

const store = configureStore({
  reducer: {
    info: InfoReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
