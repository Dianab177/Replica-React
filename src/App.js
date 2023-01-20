import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SoundWave from "./Componentes/SoundWave/SoundWave";
import Join from "./Componentes/Join/Join";
import Discovery from "./Componentes/Discovery/Discover";
import Appbar from "./Componentes/Appbar";
import { makeStyles } from "@mui/styles";
import Footer from "./Componentes/Footer/Footer";

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
       
          <div className={classes.root}>
            <header className="App-header">
              <Appbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<SoundWave />} />
                <Route path="join"  />
                <Route path="discovery"  />
                <Route path="footer"  />
              </Routes>
            </main>
          </div>
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
