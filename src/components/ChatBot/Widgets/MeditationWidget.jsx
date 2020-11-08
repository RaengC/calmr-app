import React from 'react';
import LinkList from '../LinkList/LinkList'

const MeditationWidget = (props) => {
  const options = [
    {
      text: "Guided Meditation",
      url:
        "https://www.tarabrach.com/?powerpress_pinw=11174-podcast",
      id: 1,
    },
    {
      text: "Loving This Life - Happiness",
      url: "https://www.tarabrach.com/?powerpress_pinw=2512-podcast",
      id: 2,
    },
    {
      text: "5-min Meditation",
      url: "https://youtu.be/inpok4MKVLM",
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
export default MeditationWidget;