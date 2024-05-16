import "./App.css";
import logo from "./assets/logo.png";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import Clip from "./component/imgclip/clip";
import Reduces from "./component/reduce/reduces";
import Calendar from "./component/calendar/Calendar";


function App() {

  return (
    <div className="App">
 <Clip/>
 {/* <Reduces/> */}
  {/* <Calendar/> */}
    </div>
  );
}

export default App;
