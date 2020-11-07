import React from 'react';

import './SupportOptions.css';

const SupportOptions = (props) => {
  const options = [
    // text name are the paramaters displayed on the DOM
    {
      text: "Meditation",
      handler: props.actionProvider.handleMeditationList,
      id: 1
    },
    {text: "Mindfullness", handler: () => {}, id: 2},
    {text: "Breathing", handler: () => {}, id: 3},
    {text: "Creative Outlets", handler: () => {}, id: 4},
    {text: "Anxiety Resources", handler: () => {}, id: 5},
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="support-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  return <div className="support-options-container">{optionsMarkup}</div>;

}

export default SupportOptions
