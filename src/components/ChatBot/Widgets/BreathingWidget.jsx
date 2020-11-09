import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

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

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
}
}



export default BreathingWidget;
