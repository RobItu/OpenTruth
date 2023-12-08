import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

/**
 * Component for service/[title] that links users to AI
 */

const AiOptions = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleButtonClick = (e) => {
    // Get the position of the button
    const button = e.target.getBoundingClientRect();

    // Calculate the position for the box
    const x = button.left + window.scrollX;
    const y = button.bottom + window.scrollY;

    setCursorPos({ x, y });
    setShowLinks(true);
  };

  const hideLinks = () => {
    setShowLinks(false);
  };

  return (
    <div className="ai-options-container">
      <button onClick={handleButtonClick}>
        <Image
          src={"/ai_liberty2.jpg"}
          alt={"ai_liberty2.jpg"}
          width={351}
          height={500}
        />
        <h2>Read it with AI</h2>
      </button>
      {showLinks && (
        <div
          className="links-box"
          style={{ top: cursorPos.y, left: cursorPos.x }}
          onMouseLeave={hideLinks}
        >
          <ul>
            <li className="ai-link-list">
              <Link href={"https://chat.openai.com"} target="_blank">
                GPT-4
              </Link>
            </li>
            <li>
              <Link
                href="https://www.bing.com/search?q=Bing%20AI&showconv=1&form=MA13FV"
                className="ai-link-list"
                target="_blank"
              >
                Bing Copilot
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AiOptions;
