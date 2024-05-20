import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProductList } from './components/ProductList.jsx'

ReactDOM.createRoot(document.getElementById('body')).render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
)
