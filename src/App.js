import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
