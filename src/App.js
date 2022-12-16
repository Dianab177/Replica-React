import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SoundWave from "./Componentes/SoundWave/SoundWave";
import Join from "./Componentes/Join/Join";
import Discovery from "./Componentes/Discovery/Discover";
import Appbar from "./Componentes/Appbar";
import { makeStyles } from "@mui/styles";
import WindowShow from "./Componentes/WindowShow";
import { ThemeProvider } from "@mui/material";
import { theme } from "./MediaQuerys/Querys";

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <header className="App-header">
              <Appbar />
            </header>
            <main>
              <WindowShow />
              <Routes>
                <Route path="/" element={<SoundWave />} />
                <Route path="join" element={<Join />} />
                <Route path="discovery" element={<Discovery />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2F303A",
  },
}));
export default App;
