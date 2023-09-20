import  { useState, useEffect } from 'react';

const TypewriterWithHide = ({ text, repeat, speed }) => {
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

  return <p>{displayText}</p>;
};

export default TypewriterWithHide;
