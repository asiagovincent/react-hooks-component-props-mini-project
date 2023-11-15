import React from 'react';

const Article = ({ title, date, preview }) => {
  const calculateReadingTime = (minutes) => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);
    const coffeeCupsEmoji = '☕️';
    const bentoBoxEmoji = '🍱';

    if (minutes < 30) {
      return `${coffeeCupsEmoji.repeat(coffeeCups)} ${minutes} min read`;
    } else {
      return `${bentoBoxEmoji.repeat(bentoBoxes)} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{calculateReadingTime(30)}</p>
    </article>
  );
};

export default Article;
