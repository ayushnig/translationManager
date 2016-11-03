import React from 'react';
//import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.addValue}>
            <select>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input type="number" min="0" />
          </div>
          <button type="button">Add</button>
        </div>
      </div>
    );
  }
}