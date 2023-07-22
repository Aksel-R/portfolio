
import React, { useEffect } from "react";
import TagCloud from "tagcloud"; // Assuming the correct package name is "tagcloud"
import "../globals.css";

const TextSphere: React.FC = () => { // Added type annotation for functional component
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "Negotiation",
      "Fast learning",
      "Problem-solving",
      "Research skills",
      "Management",
      "SRUM methadology",
      "Team player",
      "consistency",
      "commitment",
      
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
    <div className="soft">
      <span  className="tagcloud" />
    </div>
  );
};

export default TextSphere;
