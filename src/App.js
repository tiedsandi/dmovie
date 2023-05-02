import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './config/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route
            path='/:category/search/:keyword'
            element={<Catalog />}
          /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
