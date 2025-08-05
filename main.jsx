import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // ✅ Import UserProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>       {/* ✅ Wrap App with UserProvider */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
