class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // console.log(message);
    const lowerCase = message.toLowerCase();

    // define search term and variables of search term here
    let checkMeditation =["meditation", "medit", "meditations"];

    if (lowerCase.includes("hello")) {
      return this.actionProvider.greet();
    };

    if (checkMeditation.some((item) => lowerCase.includes(item))) {
      return this.actionProvider.handleMeditationList();
    }
    return this.actionProvider.handleDefault()
  };
}

export default MessageParser;
