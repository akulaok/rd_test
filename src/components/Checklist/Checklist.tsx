import { useContext } from 'react';
import { ChecklistItem } from '../../models/ChecklistItem';
import CheckListItem from '../CheckListItem/CheckListItem';
import { ChecklistContext } from '../../context/ChecklistContext';


function Checklist(): JSX.Element {
  const { checkList } = useContext(ChecklistContext)!;
  return (
    <>
      {checkList?.items.map((item: ChecklistItem, index: number) =>
      (
        <CheckListItem item={item} key={index} />
      )
      )}
    </>
  );
}
export default Checklist;
