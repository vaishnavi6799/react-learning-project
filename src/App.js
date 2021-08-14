//import logo from './logo.svg';
import './App.css';
import Header from './Header/index';
// import {AppContainer} from './commonStyles';
import { AppStyles } from './commonStyles';
import { ThemeProvider } from 'styled-components';
import Container from './Container';
import AppRouter from './routes/Router';
function App() {
  return (
    <>
     <ThemeProvider theme={{}}>
      <AppStyles />
      <Header/>
      <Container>
        <AppRouter/>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
