
import {useCallback, useMemo, useState} from "react";
import './App.css';
import { ChildArea } from "./components/ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onClickOpen = () => {
    setOpen(!open)
  };

  const onClickClose = useCallback(() => {
    return (
      setOpen(false)
    );
  }, 
[open]);


  return (
    <>

    <input value={text} onChange={onChangeText}></input>
    <br></br>
    <br></br>
    <button onClick = {onClickOpen}>Display</button>

    <ChildArea open={open} onClickClose = {onClickClose}></ChildArea>

    </>
  );
};