
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import Wrapper from './components/Wrapper.jsx'

createRoot(document.getElementById('root')).render(<Wrapper App={<App/>}/>)


{
//     <>
//   <App />
//   <ToastContainer position='top-center'/>
// </>
}