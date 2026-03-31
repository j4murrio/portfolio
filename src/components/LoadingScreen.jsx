import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Floating icons */}
      <div className="floating-icon icon-code"><FontAwesomeIcon icon={faCode} /></div>
      <div className="floating-icon icon-terminal"><FontAwesomeIcon icon={faTerminal} /></div>
      <div className="floating-icon icon-floppy"><FontAwesomeIcon icon={faFloppyDisk} /></div>

      {/* Center content */}
      <div className="loading-center">
        <div className="initials-tiles">
          <div className="tile tile-blue">J</div>
          <div className="tile tile-pink">A</div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
