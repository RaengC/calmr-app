import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

const EmergencyWidget = (props) => {
  const options = [
    {
      text: "Lifeline",
      url: "https://www.lifeline.org.au/",
      id: 1,
    },
    {
      text: "Beyond Blue",
      url: "https://www.beyondblue.org.au/",
      id: 2,
    },
  ];

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
};

export default EmergencyWidget;
