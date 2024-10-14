import { useContext } from 'react';
import styles from '../../pages/ChecklistPage/ChecklistPage.module.css'
import { ChecklistContext } from '../../context/ChecklistContext';

function ResultText(): JSX.Element {
  const { CompletedStatistic, IncompleteStatistic, username } = useContext(ChecklistContext)!;

  return (
    <div >
      <p className={styles.text}>Привет, <b>{username}</b>! Я проверил твое задание!</p>
      <p className={styles.text}>Ты выполнил {CompletedStatistic} пункта</p>
      <p className={styles.text}> А вот {IncompleteStatistic} у тебя не получилося</p>
      <p className={styles.text}> Хорошего тебе настроения и удачного дня!</p>
    </div>
  );
}
export default ResultText;
