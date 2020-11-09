class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  };

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  };

  // default message for any text typed.
  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
    });
    this.updateChatbotState(message)
  };

  // get back to main options
  handleSupportOptions = () => {
    const message = this.createChatBotMessage(
      `What would you like help with?`,
      {
        widget: "supportOptions",
        withAvatar: true
      }
    )
    this.updateChatbotState(message);
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

  handleMindfullnessList = () => {
    const message = this.createChatBotMessage(
      "Wonderful, here are some resources on mindfullness:",
      {
        widget: "mindfullnessLinks",
        withAvatar: true
      }
    );
    this.updateChatbotState(message);
  };

  handleBreathingList = () => {
    const message = this.createChatBotMessage(
      "Breathing is the best! Here are some techniques:",
      {
        widget: "breathing",
        withAvatar: true
      }
    );
    this.updateChatbotState(message);
  };

  handleCreativeList = () => {
    const message = this.createChatBotMessage(
      "Some beautiful creative outlets are:",
      {
        widget: "creative",
        withAvatar: true
      }
    );
    this.updateChatbotState(message);
  };

  handleAnxietyList = () => {
    const message = this.createChatBotMessage(
      "Here are some resoures for axiety:",
      {
        widget: "anxiety",
        withAvatar: true
      }
    );
    this.updateChatbotState(message);
  };

  handleEmergencyList = () => {
    const message = this.createChatBotMessage(
      "If you need to talk to someone please use these resources:",
      {
        widget: "emergency",
        withAvatar: true
      }
    );
    this.updateChatbotState(message);
  };


  // update the ChatBot messages here
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
