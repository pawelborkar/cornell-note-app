import { ThemeProvider } from  "@mui/material/styles";
import theme from '../theme'
import Footer from "./Footer"; 
import Header from "./Header";
import NavBar from "./NavBar";
import Topic from './Topic'
import CssBaseline from '@mui/material/CssBaseline';
import WhatILearned from "./WhatILearned";
import Container from '@mui/material/Container';


function App() {
    return (
        <ThemeProvider theme={theme} >
            <NavBar />

        <CssBaseline />
        <Container maxWidth='sm'>
            <Header />
            <Topic />
            <WhatILearned/>
        </Container>
        <Footer />

        </ThemeProvider>
    );
}

export default App;
