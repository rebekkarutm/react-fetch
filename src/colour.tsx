//importing elements from React
import {useState, CSSProperties} from 'react';
//importing a style to alter it for a button
import {inputStyle} from './styles'

//defining the types of colour data
type ColourCodes = {
    hex:string,
    rgb:string,
    hsl:string
  }

//creating props for the colour styling and implementing the data to decide on the background colour
type Props = {
    colour:ColourCodes|null
    setColour:React.Dispatch<React.SetStateAction<null>>
    style:CSSProperties
}

//creating a function to fetch using "fetch and then"
function Colour({colour, setColour, style}:Props) {
    //creating state for user input box
    const [userInput, setUserInput] = useState('')
    //creating state for button hover effect
    const [isHover, setIsHover] = useState(false)
    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    //fetching and calling data
    const generate = () => {
        fetch(`https://x-colors.yurace.pro/api/random/${userInput}`)
        .then((response) => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            setColour(json)
        })
    }

    //creating a button style using a style from the styles.tsx file, altering to add hover effect
    const btnStyle = {
        ...inputStyle,
        backgroundColor: isHover ? 'black' : 'white',
        color: isHover ? 'white' : 'black',
        transition: '0.5s ease',
    }

    //returning data in a div with the global style, specific styling for the h3 element
    return (
        <div style={style}>
            <label>
                <h3 style={{textAlign: 'center'}}>Pick a colour</h3>
            </label>
            <input
                //adding style and allowing the user to input the colour they want
                style={inputStyle}
                onChange={(e)=>setUserInput(e.target.value)}
                type='text'
                placeholder='type for example "blue"'></input>
            <button
                //creating hover effect and adding style
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={btnStyle}
                onClick={generate}
            >Generate gradient</button>
            {(!colour)?
                //if no colour display nothing (the empty h3 element), else display the colour data
                <h3></h3>:
                <p>{colour.hex}
                {colour.rgb}
                {colour.hsl}</p>
            }
        </div>
    );
}

export default Colour;