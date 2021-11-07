import './App.css';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

function App() {
  return <div className="App">인증 추가작업</div>;
}

export default App;
