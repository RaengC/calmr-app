class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // console.log(message);
    const lowerCase = message.toLowerCase();

    // define search term and variables of search term here
    let supportOptions =["main menu", "main", "start", "beginning", "options"]
    let checkMeditation =["meditation", "medit", "meditations"];
    let checkMindfullness =["mindfullness", "mindful", "western meditation"];
    let checkBreathing =["breathing", "breath", "breathe"];
    let checkCreative =["creative outlets", "create", "art", "creative"];
    let checkAnxiety =["anxiety", "stress", "anxious", "stress help"];
    let checkEmergency =["suicide", "in trouble", "emergency", "000", "911"]

    if (lowerCase.includes("hello")) {
      return this.actionProvider.greet();
    };
    // return to main menu
    if (supportOptions.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleSupportOptions();
    }
    // Lists of broad options
    if (checkMeditation.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleMeditationList();
    };
    if (checkMindfullness.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleMindfullnessList();
    };
    if (checkBreathing.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleBreathingList();
    };
    if (checkCreative.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleCreativeList();
    };
    if (checkAnxiety.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleAnxietyList();
    };
    if (checkEmergency.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleEmergencyList();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
