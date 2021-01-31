import React from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/home.component.jsx';

const TopicList = (props) =>{
  console.log(props);
  return (
    <div>
      <button onClick={()=> props.history.push('/topics/13')}>Button1</button>
      <h1> TopicList Page</h1>
      <Link to={`${props.match.url}/13`}>Link 13</Link>
      <Link to={`${props.match.url}/14`}>Link 14</Link>
      <Link to={`${props.match.url}/17`}>Link 17</Link>
    </div>
  );
  
};
const TopicDetail = (props) =>{
  console.log(props);
  return (
    <div>
    <Link to='/topics'> Topic List</Link>
      <h1> TopicDetail Page: {props.match.params.topicId}</h1>
    </div>
  );
  
};
function App() {
  return (
    <div className="homepage">
      <Route exact path='/' component={Homepage} />
      <Route exact path='/topics' component={TopicList} />
      <Route exact path='/topics/:topicId' component={TopicDetail} />
      <Route exact path='/pag2/topics' component={TopicList} />
      <Route exact path='/pag2/topics/:topicId' component={TopicDetail} />
     
    </div>
  );
}

export default App;
