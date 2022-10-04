import './App.css'
import styled from "styled-components";
import GlobalStyle from './theme/GlobalStyle';
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { AppProvider } from "./store/context";

const Main = styled.div`
    width: 1275px;
    min-width: 1225px;
    margin: 0 auto;
`;

function App() {
  return (
    <Main>
        <AppProvider>
            <Header />
            <CardList />
            <GlobalStyle />
        </AppProvider>
    </Main>
  )
}

export default App
