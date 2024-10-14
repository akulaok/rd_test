import styles from '../../pages/ChecklistPage/ChecklistPage.module.css'

type AnswerProps = {
  text: string,
  name: string,
  value: string,
  onChange: (e: any) => void,
  checked: boolean
}

function Answer({ text, name, value, onChange, checked }: AnswerProps): JSX.Element {


  return (
    <label className={styles.answer}>
      <input
        type="radio"
        name={name}
        value={value}
        className={styles.radio}
        onChange={onChange}
        checked={checked}
      />
      {text}
    </label>
  );
}
export default Answer;
