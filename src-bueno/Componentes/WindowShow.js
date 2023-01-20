import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const WindowShow = () => {
  const [w, setw] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setw(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Typography variant="h4">{w}</Typography>
    </div>
  );
};

export default WindowShow;
