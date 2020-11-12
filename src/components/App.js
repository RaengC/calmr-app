import React , { Component }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  useHistory,
  useParams
} from "react-router-dom";

import { ConditionallyRender } from "react-util-kit";

import { Menu } from './Menu/Menu'

import OptionsMarkup from './ChatBot/WidgetsList/OptionsMarkup';
import BotApp from './ChatBot/BotApp';
import Article from './Articles/Article';
import ArticleDisplay from './Articles/ArticleDisplay';
import SavedArticles from  './Articles/SavedArticles';
import ArticleForm from './Articles/ArticleForm'
import Registration from   './Users/auth/Registration'
import UserHome from './Users/UserHome'
import Home from './Home/Home'
import About from './Home/About'
import Login from './Users/registrations/Login'
import EditProfile from './Users/registrations/EditProfile'
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
      user: {},
      showChatBot: false
     };
     this.handleLogout=this.handleLogout.bind(this)
     this.handleLogin = this.handleLogin.bind(this)
     this.loginStatus = this.loginStatus.bind(this)
  }
  componentDidMount() {
      this.loginStatus()
    }
    loginStatus = () => {
        axios.get('http://localhost:3000/logged_in', {withCredentials: true})
        .then(response => {

          if (response.data.logged_in) {

            this.handleLogin(response)

          } else {
            this.handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
      }

      handleLogin = (data) => {
        //debugger;
          this.setState({
            isLoggedIn: true,
            user: data.user
          })

        }

      handleLogout = () => {
          this.setState({
          isLoggedIn: false,
          user: {}
          })
          return '';
        }

        handleBotClick=()=>{
          this.setState({
            showChatBot: !this.state.showChatBot
          })
        }
//  const [showChatBot, toggleChatbot] = useState(false);

  render() {
  return (
    <HashRouter className="container">

      <Menu />
        <div className="header-box">
          <img
            className="header-logo"
            src={logo}
            alt="lotus flower image"
            />
          <h1 className="header">Calmr</h1>
        </div>

        <div className="app">
          <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

              <Switch>
                <Route
                  exact path='/login'
                  render={props => (
                    <UserHome {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}
                    />
                  )}
                />
                <Route
                  exact path='/login/login'
                  render={props => (
                    <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                  )}
                />



                <Route
                  exact path='/signup'
                  render={props => (
                    <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                  )}
                    />


                    <Route
                      exact path='/EditProfile'
                      render={props => (
                        <EditProfile {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}
                        user={this.state.user}/>
                      )}
                        />

                <Route path="/createAccount">
                  <Registration />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/podcastDisplay">
                  <ArticleDisplay user={this.state.user}/>
                </Route>
                <Route path="/podcastForm">
                  <ArticleForm user={this.state.user}/>
                </Route>
                <Route path="/podcast">
                  <Article user={this.state.user}/>
                </Route>
                <Route path="/SavedArticles">
                  <SavedArticles />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
          <div className="app-chatbot-container">
            <ConditionallyRender
              ifTrue={this.state.showChatBot}
              show={ <BotApp />
            }
            />
          </div>
          <button
            className="app-chatbot-button">
            <img
              className="logo"
              src={logo}
            alt="lotus flower image"
             onClick={this.handleBotClick}/>
          </button>
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
