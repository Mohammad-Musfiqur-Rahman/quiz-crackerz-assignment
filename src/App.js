import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from '../src/Router/Router'

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
