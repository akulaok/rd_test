import styles from './Statistics.module.css'
import { useContext } from 'react';
import { ChecklistContext } from '../../context/ChecklistContext';

function Statistic(): JSX.Element {
  const { CompletedStatistic, IncompleteStatistic } = useContext(ChecklistContext)!;

  return (
    <section className={styles.statistic}>
      <span className={styles.text}>
        ✅ {CompletedStatistic} <span className={styles.hiddenText}>Выполнены</span>
      </span>
      <span className={styles.text}>
        ❌ {IncompleteStatistic} <span className={styles.hiddenText}>Не выполнены</span>
      </span>
    </section>
  );
}
export default Statistic;
