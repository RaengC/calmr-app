import React from 'react';

const CreativeWidget = (props) => {
  const options = [
    {
      text: "creative 1",
      url: "",
      id: 1,
    },
    {
      text: "creative 2",
      url: "",
      id: 2,
    },
    {
      text: "creative 3",
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

export default CreativeWidget;
