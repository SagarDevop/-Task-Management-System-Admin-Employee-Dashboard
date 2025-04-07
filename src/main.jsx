import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Authprovider from './Context/Authprovider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <App/>
    </Authprovider>
  </StrictMode>,
)
