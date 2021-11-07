import './App.css';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsmobile);

function App() {
  return <div className="App">인증된 유저의 페이지</div>;
}

export default withAuthenticator(App);
