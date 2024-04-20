import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WarningOptions = {
    position:"bottom-right",
    autoClose: 5000,
    hideProgressBar:false,
    type: 'warning',
    newestOnTop:false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: false,
    theme: "dark",
    transition: Bounce
  };
  
export const SuccessOptions = {
    position:"bottom-right",
    autoClose: 5000,
    hideProgressBar:false,
    type: 'success',
    newestOnTop:false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: false,
    theme: "dark",
    transition: Bounce
  };

  export const ErrorOptions = {
    position:"bottom-right",
    autoClose: 5000,
    hideProgressBar:false,
    type: 'error',
    newestOnTop:false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: false,
    theme: "dark",
    transition: Bounce
  };
  
//Usage: toast("Message",TypeOfOptions)
//Need to plaCe a <ToastContainer> component!