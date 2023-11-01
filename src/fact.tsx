//importing elements from React
import {useState, useEffect, CSSProperties} from 'react';

//creating props for the css styling
type Props = {
    style:CSSProperties
}

//creating a function to fetch using "async and await"
function Fact ({style}:Props){
    const [fact, setFact] = useState(null)
    //fetching and calling data
    useEffect (()=>{
        const getFact = async()=>{
            const response = await fetch ('https://uselessfacts.jsph.pl/api/v2/facts/random')
            const json = await response.json()
            setFact(json.text)
        }
        getFact();
    }, [])

    //if no fact, display this instead
    if (!fact) return <h3 style={style}>loading...</h3>

    //returning the data in a div with the global style from styles.tsx and a specific h3 styling
    return (
        <div style={style}>
            <h3 style={{textAlign: 'center'}}>Here's a useless fact!</h3>
            <p>{fact}</p>
        </div>
    );
}

export default Fact;