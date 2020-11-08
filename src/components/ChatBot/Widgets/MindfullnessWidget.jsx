import React from 'react';

import LinkList from '../LinkList/LinkList'

const MindfullnessWidget = (props) => {
  const options = [
    {
      text: "Test here",
      url:
        "https://www.tarabrach.com/?powerpress_pinw=11174-podcast",
      id: 1,
    },
    {
      text: "Test 2",
      url:
        "https://www.tarabrach.com/?powerpress_pinw=11174-podcast",
      id: 2,
    },
    {
      text: "Test 3",
      url:
        "https://www.tarabrach.com/?powerpress_pinw=11174-podcast",
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
export default MindfullnessWidget;
