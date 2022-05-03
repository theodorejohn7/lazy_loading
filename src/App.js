// import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
 import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
 import routes from './pages/routes';

 


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      <Routes>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Suspense fallback={<>...</>}>
                   <route.element />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>

  );
}



export default App;
