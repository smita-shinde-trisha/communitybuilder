import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from 'react'
import { Home } from "./components/home";
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';
import { CssBaseline } from '@mui/material';
import { FAQ } from "./components/faq";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {

  useEffect (() => {
    AOS.init({
      duration: 1200,
    })
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
            <Route path='/FAQ' element={<FAQ />} />
            
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;