import logo from './logo.svg';
import './App.css';
import ClassPoints from './ClassPoints';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
     
        <Provider store={store}>
       <ClassPoints></ClassPoints>
       </Provider>
    
    </div>
  );
}

export default App;
