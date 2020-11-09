import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

const CreativeWidget = (props) => {
  const options = [
    {
      text: "Unleash Your Natural Creativity",
      url: "https://youtu.be/yjYrxcGSWX4",
      id: 1,
    },
    {
      text: "Your elusive creative genuius",
      url: "https://youtu.be/86x-u-tz0MA",
      id: 2,
    },
    {
      text: "Where does creativity hide?",
      url: "https://youtu.be/8D0pwe4vaQo",
      id: 3,
    },
    {
      text: "The theory of creativity",
      url: "https://youtu.be/_8MwiGYzlyg",
      id: 4,
    }
  ];

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
}

export default CreativeWidget;
