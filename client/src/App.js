import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import AnimeScreen from './screens/AnimeScreen'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/anime/:id' exact component={AnimeScreen} />      
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
