import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';
import styles from '../scss/test.scss';

const App = () => <h1 className={styles.red}>My React and TypeScript App!</h1>;

ReactDOM.render(<App />, document.getElementById('root'));
