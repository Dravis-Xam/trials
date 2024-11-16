import React, { useState, useEffect } from "react";
import "./jobtitles.css";

export default function JobTitles() {
  const strings = ["Software developer", "Freelancer", "Designer"];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (letterIndex < strings[currentStringIndex].length) {
        setDisplayedText((prev) => prev + strings[currentStringIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        setLetterIndex(0);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        setDisplayedText(""); 
      }
    }, 150);
    return () => clearInterval(interval);
  }, [letterIndex, currentStringIndex]);

  return <span className="jobtitles">{displayedText}</span>;
}
