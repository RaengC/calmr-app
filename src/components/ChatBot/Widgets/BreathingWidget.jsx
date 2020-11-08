import React from 'react';

const BreathingWidget = (props) => {
  const options = [
    {
      text: "Breathing to Stop Anxiety Attack",
      url: "https://youtu.be/vXZ5l7G6T2I",
      id: 1,
    },
    {
      text: "Moving Mandala Meditation",
      url: "https://youtu.be/qZLO2EE_oKE",
      id: 2,
    },
    {
      text: "Solfeggio Frequencies with visuals",
      url: "https://youtu.be/goyZbut_KFY",
      id: 3,
    },
    {
      text: "Mindful Breathing",
      url: "https://youtu.be/nmFUDkj1Aq0",
      id: 4,
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

export default BreathingWidget;
