import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RoutesList from './RoutesList';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {RoutesList.map((routes) => {
            return (<Route key={routes.path} path={routes.path} element={<routes.element />} exact />);
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
