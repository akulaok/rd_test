import { useContext } from 'react';
import styles from '../../pages/ResultPage/ResultPage.module.css'
import { ChecklistContext } from '../../context/ChecklistContext';
import { copyTextToClipboard } from '../../utils';

function CopyButton(): JSX.Element {
  const { CompletedStatistic, IncompleteStatistic, username } = useContext(ChecklistContext)!;

  const text = `Привет, ${username}! Я проверил твое задание!
  Ты выполнил ${CompletedStatistic} пункта
  А вот ${IncompleteStatistic} у тебя не получилось
  Хорошего тебе настроения и удачного дня!`;

  const handleCopyClick = () => {
    copyTextToClipboard(text);
  };

  return (
    <button className={styles.button} onClick={handleCopyClick}>Скопировать текст</button>
  );
}
export default CopyButton;
