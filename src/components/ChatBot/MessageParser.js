class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // console.log(message);
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("meditation")) {
      this.actionProvider.handleMeditationList();
    }
  }
}

export default MessageParser;
