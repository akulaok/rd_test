import styles from '../../pages/ChecklistPage/ChecklistPage.module.css'
import { ChecklistItem as checkListItemType } from '../../models/ChecklistItem';
import Answer from '../Answer/Answer';
import { useContext, useState } from 'react';
import { ChecklistContext } from '../../context/ChecklistContext';


type ChecklistProps = {
  item: checkListItemType,
}

function CheckListItem({ item }: ChecklistProps): JSX.Element {
  const { updateCheckListItem } = useContext(ChecklistContext)!;

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.value as 'complete' | 'partial' | 'incomplete';
    item.setState(newState);
    updateCheckListItem(item);
  };
  return (
    <fieldset className={styles.question}>
      <legend className={styles.text}>{item.title}</legend>
      <div className={styles.answers}>
        <Answer text={item.descriptionComplete} name={item.title} value="complete" checked={item.currentState === 'complete'} onChange={handleChangeAnswer} />
        <Answer text={item.descriptionPartial} name={item.title} value="partial" checked={item.currentState === 'partial'} onChange={handleChangeAnswer} />
        <Answer text={item.descriptionIncomplete} name={item.title} value="incomplete" checked={item.currentState === 'incomplete'} onChange={handleChangeAnswer} />
      </div>
    </fieldset>
  );
}
export default CheckListItem;
