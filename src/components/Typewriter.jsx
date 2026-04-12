import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay = 100, pause = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, delay / 2);
      }
    } else {
      if (currentText === words[currentWordIndex]) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1));
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, pause]);

  return (
    <>
      {currentText}
      <span className="animate-pulse border-r-2 border-primary-500 pr-1 ml-1" style={{ display: 'inline-block', height: '1em', verticalAlign: 'text-bottom' }}></span>
    </>
  );
};

export default Typewriter;
