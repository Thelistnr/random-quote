import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import quotes from "../Assets/Data/Quotes";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const Land = () => {
    const [id, setId] = useState(Math.trunc(Math.random(0) * 101));
    // const [colInd, setColInd] = useState(Math.trunc(Math.random(0) * 11));
    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];
    const [color, setColor] = useState(colors[Math.trunc(Math.random(0) * 11)]);

    const handleClick = () => {
        document.querySelector(".quote").style.opacity = 0;
        setTimeout(() => {
            document.querySelector(".quote").style.opacity = 1;
            setColor(colors[Math.trunc(Math.random(0) * 11)]);
            setId(Math.trunc(Math.random(0) * 101));
        }, 1000);
    };

    return ( 
        <div className="land" style={{backgroundColor:color}}>
            <div className="randQuote" id="quote-box">
                <div className="quote" id="text">
                    <FontAwesomeIcon icon={faQuoteLeft} className="quoIco" style={{height:45, margin:"0 0.4rem -7px 0", color:color, transition: "1s ease-in-out"}}/> {quotes[id].quote}
                </div>
                <div className="quoteAuthor" id="author" style={{color:color, alignSelf:'flex-end', transition: "1s ease-in-out"}}>
                    - {quotes[id].author}
                </div>
                <div className="footer">
                    <div className="icons" style={{display:'flex', gap:'10px'}}>
                        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=Cookoorook&text=${quotes[id].quote}%20-${quotes[id].author}`} target="blank" className="twitter" id="tweet-quote" style={{backgroundColor:color, transition: "1s ease-in-out"}}>
                            <FontAwesomeIcon icon={faXTwitter} style={{height:19, color:'white'}}/>
                        </a>
                        <a href={`whatsapp://send?text=${quotes[id].quote}%20-${quotes[id].author}`} data-action="share/whatsapp/share" target="blank" className="whatsapp" style={{backgroundColor:color, transition: "1s ease-in-out"}}>
                            <FontAwesomeIcon icon={faWhatsapp} style={{height:19, color:'white'}}/>
                        </a>
                        <div onClick={e => {navigator.clipboard.writeText(`${quotes[id].quote} -${quotes[id].author}`); alert("Quote copied");}} className="copy" style={{backgroundColor:color, transition: "1s ease-in-out", cursor:'pointer'}}>
                            <FontAwesomeIcon icon={faCopy} style={{height:19, color:'white'}}/>
                        </div>
                    </div>
                    <button id="new-quote" style={{backgroundColor:color, transition: "1s ease-in-out"}} onClick={handleClick}>
                        New quote
                    </button>
                </div>
            </div>
            <div className="me" style={{color:'white', fontSize:'12.8px'}}>
                by <a href="/" style={{color:'white'}}>theListnr</a>
            </div>
        </div>
     );
}
 
export default Land;