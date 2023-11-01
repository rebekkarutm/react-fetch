//importing a React Hook
import {useState} from 'react'
//importing the tsx files
import Quote from './quote'
import Colour from './colour'
import Fact from './fact'
//importing css styles
import {divStyle} from './styles'

//identifying strings for the colours
type ColourCodes = {
  hex:string,
  rgb:string,
  hsl:string
}

function App() {
  //calling the colours so I can connect it to the the background colour in colourStyle
  const [colour, setColour] = useState(null) as [ColourCodes|null, React.Dispatch<React.SetStateAction<null>>];
  const colourStyle = {
    ...divStyle,
    backgroundColor: colour === null ? 'null' : colour.hex
  }
  
  //returning the components with the colourStyle (so I can connect it in the corresponding files) and display flex
  return (
    <div style={{display: 'flex'}}>
      <Quote style={colourStyle}></Quote>
      <Colour style={colourStyle} colour = {colour} setColour = {setColour}></Colour>
      <Fact style={colourStyle}></Fact>
    </div>
  );
}

export default App;