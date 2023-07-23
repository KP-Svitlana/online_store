import React, { useState } from 'react';

const Spoiler = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSpoiler = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="spoiler">
      <button onClick={toggleSpoiler}>{title}</button>
      {expanded && <SpoilerContent>{children}</SpoilerContent>}
    </div>
  );
};

const SpoilerContent = ({ children }) => {
  return <div className="spoiler-content">{children}</div>;
};

export { Spoiler, SpoilerContent };
