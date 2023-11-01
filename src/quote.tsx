//importing elements from React
import {useState, useEffect, CSSProperties} from 'react';

//creating props for the css styles
type Props = {
    style:CSSProperties
}

//creating a funciton to fetch using "async and await"
function Quote({style}:Props) {
    const [quote, setQuote] = useState(null)
    //fecthing and calling data
    useEffect(() => {
        const getQuote = async() => {
            const response = await fetch ('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            const json = await response.json()
            setQuote(json)
        }
        getQuote();
    }, [])
    
    //if the quote isn't there, display loading...
    if (!quote) return <h3 style={style}>loading...</h3>

    //returning the data in a div with the global style from styles.tsx and specific styling on the h3 element
    return (
        <div style={style}>
            <h3 style={{textAlign: 'center'}}>Ron Swanson says:</h3>
            <p>{quote}</p>
        </div>
    );
}

export default Quote;