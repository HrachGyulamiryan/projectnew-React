import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { obj } from './component/First';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const textFunc = (state = obj, action) => {
  if(action.type === 'name') {
    return {...state, text: 'Arman'}
  }
  return state
}

const stor = createStore(textFunc)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={stor}>
    <App />
  </Provider>
);