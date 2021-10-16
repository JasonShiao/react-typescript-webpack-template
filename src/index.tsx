import React from 'react';
import ReactDOM from 'react-dom';
import forest from 'Images/forest-1920.jpg';
import '../scss/style.scss';
import styles from '../scss/test.scss';

const App = () => <h1 className={styles.red}>My React and TypeScript App!</h1>;
const MainImage = () => (
  <div>
    <img src={forest} className="test-image" alt="" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MainImage />, document.getElementById('main-image'));
