import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

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

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
}

export default CreativeWidget;
