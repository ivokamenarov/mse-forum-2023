import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import HomePage from './components/HomePage';
import AllTopicsPage from './components/AllTopicsPage';
import AppNavigation from './components/AppNavigation';
import AddTopicPage from './components/AddTopicPage';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <div className="App">
      <AppNavigation/>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/topics" element={ <AllTopicsPage/> } />
          <Route path="/topics/add" element={ <AddTopicPage/> } />
          <Route path="/topics/:topicId" element={ <TopicPage/> } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
