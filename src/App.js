import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi></Navi>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
