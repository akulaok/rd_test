import { useContext } from 'react';
import styles from '../../pages/ChecklistPage/ChecklistPage.module.css';
import { ChecklistContext } from '../../context/ChecklistContext';

function NameQuestion(): JSX.Element {
  const { username, updateUsername } = useContext(ChecklistContext)!;
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUsername(event.target.value);
  };

  return (
    <fieldset className={styles.question}>
      <legend className={styles.text}>Имя ученика</legend>
      <input
        type='text'
        className={styles.textInput}
        value={username}
        onChange={handleInputChange}
      />
    </fieldset>
  );
}

export default NameQuestion;
