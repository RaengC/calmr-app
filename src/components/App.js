import React , { Component }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  useParams
} from "react-router-dom";

import { ConditionallyRender } from "react-util-kit";

import { Menu } from './Menu/Menu'


import OptionsMarkup from './ChatBot/WidgetsList/OptionsMarkup';
import BotApp from './ChatBot/BotApp';
import JournalLanding from './Journal/JournalLanding';
import Article from './Articles/Article';
import ArticleDisplay from './Articles/ArticleDisplay';
import SavedArticles from  './Articles/SavedArticles';
import ArticleForm from './Articles/ArticleForm'
import Registration from   './Users/auth/Registration'
import User from './Users/User'
import About from './Journal/About'
import Login from './Users/registrations/Login'
import Signup from './Users/registrations/Signup'
import axios from 'axios';

import logo from "./Assets/lotus-flower.png";

import '../App.css';
const handleClick = (event) => {
  console.log("here")
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
  }
  componentDidMount() {
      
    }

//  const [showChatBot, toggleChatbot] = useState(false);

  render() {
    return(
    <HashRouter>
      <Menu />
        <div className="App">
          <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login" component={Login}>
                  <User test/>
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/createAccount">
                  <Registration />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/articleDisplay">
                  <ArticleDisplay />
                </Route>
                <Route path="/articleForm">
                  <ArticleForm />
                </Route>
                <Route path="/article">
                  <Article />
                </Route>
                <Route path="/savedarticles">
                  <SavedArticles />
                </Route>
                <Route path="/">
                  <JournalLanding />
                </Route>
              </Switch>
          </div>
        </div>
    </HashRouter>
)  };
}

          // <div className="app-chatbot-container">
          //   <ConditionallyRender
          //     ifTrue={showChatBot}
          //     show={ <BotApp />
          //   }
          //   />
          // </div>
          //
          // <button
          //   className="app-chatbot-button">
          //   <img
          //     className="logo"
          //     src={logo}
          //     onClick={() => toggleChatbot((prev) => !prev)} />
          // </button>




export default App;
