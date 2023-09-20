import  { useState, useEffect } from 'react';

const Typewriter = ({ text, repeat, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHiding && displayText.length < text.length) {
        setDisplayText((prevText) => prevText + text[displayText.length]);
      } else if (!isHiding && repeat) {
        setIsHiding(true);
      } else if (isHiding && displayText.length > 1) {
        setDisplayText((prevText) => prevText.slice(0, -1));
      } else if (isHiding && displayText.length === 1) {
        setIsHiding(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, displayText, isHiding, repeat, speed]);

  return <h1 className='text-primary text-5xl font-extrabold p-5'>{displayText}</h1>;
};

export default Typewriter;
