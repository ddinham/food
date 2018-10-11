import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase";

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyADzjrXy4uxQnruU55linZ9MfpbEbCzu7s",
    authDomain: "chat-bot-demo-f9f3c.firebaseapp.com",
    databaseURL: "https://chat-bot-demo-f9f3c.firebaseio.com",
    projectId: "chat-bot-demo-f9f3c",
    storageBucket: "",
    messagingSenderId: "1049929932793"
  };
  firebase.initializeApp(config);

  //imports and Firebase config here
const database = firebase.database();
const user = database.ref('user');

class UserMessage extends React.Component {
  constructor(){
    super()
    this.state = {avatar: "", username: "", message: "", showComponent: false}
  }

  componentDidMount() {
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;

    let promise1 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseAvatar = snapshot.val().avatar;
        resolve(firebaseAvatar);
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseUsername = snapshot.val().username;
        resolve(firebaseUsername);
      });
    });

    let promise3 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseMessage = snapshot.val().message;
        resolve(firebaseMessage);
      });
    });

    Promise.all([promise1, promise2, promise3]).then(values => {
      this.setState({avatar: values[0], username: values[1], message: values[2]})
      console.log(values);
    });

    setTimeout(() => {
      this.setState({showComponent: true});
    }, 3000)

  }

  render() {
    const showComponent = this.state.showComponent;
    return (
      <div>
        {showComponent ? (
          //render component
          <div className="user-message">
            <div style={{background: this.state.avatar}} className="user-avatar"></div>
            <div className="username">{this.state.username}</div>
            <div className="message">{this.state.message}</div>
          </div>
        ) : (
          //render nothing
          <div></div>
        )}
      </div>
    )
  }
}

module.exports = UserMessage;
