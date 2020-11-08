// import React from 'react';

import './LinkList.css';

const LinkList = (props) => {
  const optionsMarkup = props.options.map((option) => (
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
};

export default LinkList;
