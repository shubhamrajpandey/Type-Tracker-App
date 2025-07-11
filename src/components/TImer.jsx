import { useState, useRef, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const interval = useRef(null);
  const [show, setShowText] = useState(false);
  const [typedText, setText] = useState("");
  const [timeUp, setTimeUp] = useState(false);
  const [error, setError] = useState(0)
  const [wpm, setWpm] = useState(0);


  const defaultParagraph = "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet, making it a perfect typing drill. Practicing daily helps improve speed and accuracy. Consistency is key when learning to type faster and more efficiently. Keep your fingers on the home row, and don't forget to take breaks!";

  const renderParagraph = () => {
    return defaultParagraph.split('').map((char, index) => {
      let color = 'black';
      if (index < typedText.length) {
        color = typedText[index] === defaultParagraph[index] ? 'brown' : 'red';
      }

      return (
        <span key={index} style={{ color }}>
          {char}
        </span>
      );
    });
  };

  useEffect(() => {
    let errorCount = 0;
    let errorLength = Math.min(typedText.length, defaultParagraph.length)
    for (let i = 0; i < errorLength; i++) {
      if (typedText[i] !== defaultParagraph[i]) {
        errorCount++
      }
    }
    setError(errorCount)
  }, [typedText])

  
  useEffect(() => {
    if (timeUp && time > 0) {
      const words = typedText.length / 5;
      const minutes = time / 60;
      const calculatedWpm = Math.round(words / minutes);
      setWpm(calculatedWpm);
    }
  }, [timeUp]);


  const handler = () => {
    let i = 1;

    interval.current = setInterval(() => {
      setTime(i);
      i++;

      if (i > 30) {
        clearInterval(interval.current);
        interval.current = null;
        setTimeUp(true);
      }
    }, 1000);

    setShowText(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <div className="flex gap-14 mt-10">
        <h1 className="">Timer: {time}</h1>
        <button
          className="border-1 text-black-400 font-bold w-29 rounded-2xl shadow-xl"
          onClick={handler}
        >
          Start
        </button>
        <button className="border-1 text-black-400 font-bold w-29 rounded-2xl shadow-xl">Restart</button>
      </div>

      <div className="mt-4 max-w-2xl">
        {show && (
          <p>
            {renderParagraph()}
          </p>
        )}
      </div>

      <div className="mt-8">
        <textarea
          disabled={timeUp}
          value={typedText}
          onChange={(e) => setText(e.target.value)}
          className="border-2 rounded-[5px] w-[90vh] h-[30vh] shadow-2xl p-4"
          placeholder="Test Your Typing Speed........"
        />
      </div>
      <h3>Errors: {error}</h3>
      <h3>WPM: {wpm}</h3>

    </div>
  );
}

export default Timer;