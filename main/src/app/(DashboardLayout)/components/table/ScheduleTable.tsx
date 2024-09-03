import React from 'react';
import styles from './ScheduleTable.module.css';

const ScheduleTable: React.FC = () => {
  return (
    <table className={styles.table}>sss
      <thead>
        <tr>
          <th>ss5</th>
          <th>9</th>
          <th>13</th>
          <th>17</th>
          <th>21</th>
          <th>1</th>
          <th>Working / Break</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={6}>07/01 (Mon)</td>
          <td>9:18 / 1:46</td>
        </tr>
        <tr>
          <td colSpan={6}>07/02 (Tue)</td>
          <td>8:03 / 5:03</td>
        </tr>
        <tr>
          <td colSpan={6}>07/03 (Wed)</td>
          <td>8:23 / 2:02</td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default ScheduleTable;
