import { useEffect, useRef, useState } from "react";

export default function Timer() {
    const [time, setTimer] = useState(0);
    const [text, settext] = useState(false);
    const [input, setInput] = useState("")
    const [timeup, setTimeup] = useState(false)

    const[error,seterror] = useState()

    const intervalref = useRef(null);

    useEffect(()=>{
        let errorCount = 0;
        let errorLength = Math.min(input.length , defaultParagraph.length);
        for (let index = 0; index < errorLength; index++) {
            if (input[index] !== defaultParagraph[index]) {
                errorCount ++;
            }
        }
         seterror(errorCount);
    },[input])


    const defaultParagraph = "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet, making it a perfect typing drill. Practicing daily helps improve speed and accuracy. Consistency is key when learning to type faster and more efficiently. Keep your fingers on the home row, and don't forget to take breaks!"

    const renderParagraph = () => {
        return defaultParagraph.split('').map((char, index) => {
            let color = black;
            if (index < input.length) {
                color == input[index] === defaultParagraph[index] ? 'red' : 'blue';
            }
            return (
                <span key={index} style={{ color }}>
                    {char}
                </span>
            );
        })
    }

    const handler = () => {
        if (intervalref.current) {
            clearInterval(intervalref.current);
        }
        let i = 1;
        intervalref.current = setInterval(() => {
            setTimer(i);
            i++;
            if (i > 30) {
                clearInterval(intervalref.current)
                setTimeup(timeup)
            }
        }, 1000);
        settext(!text);
    }
    return (
        <>
            <h1>Timer:{time}</h1>
            <button onClick={handler}>Start</button>
            <div>
                {text && <p>{renderParagraph()}</p>}
            </div>
            <textarea
                value={input}
                disabled={timeup}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter the text"
            />
        </>
    )
}