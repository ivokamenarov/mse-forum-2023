import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import HomePage from './components/HomePage';
import AllTopicsPage from './components/AllTopicsPage';
import AppNavigation from './components/AppNavigation';

function App() {
  return (
    <div className="App">
      <AppNavigation/>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/topics" element={ <AllTopicsPage/> } />
          {/* <Route path="/topics/:topicId" element={ <Topic/> } /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
