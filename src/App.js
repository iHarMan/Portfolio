import { Container } from '@material-ui/core';
import Landing from './components/landing';
import About from './components/about';
import Project from './components/project';
import theme from './components/theme';
import './App.css';


function App() {
  return (
    <Container >
      <Landing/>
      <About/>
      <Project/>
    </Container>
  );
}

export default App;
