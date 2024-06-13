import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlinieStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";


export default function App() {
  

  return (
    <>
    <div className="App">
      <InlinieStyle></InlinieStyle>
      <CssModules></CssModules>
      <StyledJsx></StyledJsx>
      <StyledComponents></StyledComponents>
      <Emotion></Emotion>
    </div>
    </>
  )
}