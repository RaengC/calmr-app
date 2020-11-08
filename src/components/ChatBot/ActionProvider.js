class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  };

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  };

  handleMeditationList = () => {
    const message = this.createChatBotMessage(
      "Wonderful, I have the following meditations you can try:",
      {
        widget: "meditationLinks",
        withAvatar: true
      }
    );
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
    });
    this.updateChatbotState(message)
  };


  updateChatbotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }))
    }
  }
  // updateChatbotState(message) {
  //   this.setState(prevState => ({
  //     ...prevState, messages: [...prevState.messages, message]
  //   }));
  // };
}

export default ActionProvider;
