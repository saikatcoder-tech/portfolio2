import React from 'react';

const TruncatedText = ({ text, maxChars }) => {
  const truncated = text.length > maxChars ? text.slice(0, maxChars) + '...' : text;
  return <p>{truncated}</p>;
};

export default TruncatedText;