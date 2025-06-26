import { useRef, useState } from "react";

export default function Timer() {
    const [time, setTimer] = useState(0);
    const[text,settext] = useState(false);
    const [input,setInput] = useState("")
    
    const intervalref= useRef(null);

    const handler = () => {
        if (intervalref.current) {
            clearInterval(intervalref.current);
        }
        let i = 1;
        intervalref.current = setInterval(() => {
            setTimer(i);
            i++;
             if(i>30){
            clearInterval(intervalref.current)
        }
        }, 1000);
        settext(!text);    
    }
    return(
        <>
        <h1>Timer:{time}</h1>
        <button onClick={handler}>Start</button>
        <div>
            {text && <p></p>}
        </div>
        <textarea
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Enter the text"
        />
        </>
    )
}