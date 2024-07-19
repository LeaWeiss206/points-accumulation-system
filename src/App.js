import logo from './logo.svg';
import './App.css';
import ClassPoints from './ClassPoints';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
       <ClassPoints></ClassPoints>
       </Provider>
      </header>
    </div>
  );
}

export default App;
