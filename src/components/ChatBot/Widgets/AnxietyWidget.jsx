import React from 'react';

const AnxietyWidget = (props) => {
  const options = [
    {
      text: "Breathing to Stop Anxiety Attack",
      url: "https://youtu.be/vXZ5l7G6T2I",
      id: 1,
    },
    {
      text: "Anxiety 2",
      url: "",
      id: 2,
    },
    {
      text: "Anxiety 3",
      url: "",
      id: 3,
    },
  ];
  const optionsMarkup = options.map((option) => (
    <li key={option.id} className="link-list">
      <a
        href={option.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {option.text}
      </a>
    </li>
  ));

  return <ul className="link-list">{optionsMarkup}</ul>;
}

export default AnxietyWidget;
