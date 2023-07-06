
import React, { useEffect } from "react";
import TagCloud from "tagcloud"; // Assuming the correct package name is "tagcloud"
import "../globals.css";

const TextSphere: React.FC = () => { // Added type annotation for functional component
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "ES6",
      "GIT",
      "GITHUB",
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud" /> {/* Self-closing tag */}
    </div>
  );
};

export default TextSphere;
