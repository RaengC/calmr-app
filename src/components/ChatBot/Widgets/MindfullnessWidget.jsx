import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

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

  return <ul className="link-list">{optionsMarkup(options)}</ul>;

}
export default MindfullnessWidget;
