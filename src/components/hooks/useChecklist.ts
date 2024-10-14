import { useState, useEffect } from 'react';
import CheckListApi from '../../api/api';
import { Checklist } from '../../models/Checklist';
import { ChecklistItem } from '../../models/ChecklistItem';
import { requestBody } from '../../consts';

const useChecklist = (): [Checklist | null, boolean] => {
  const [checklist, setChecklist] = useState<Checklist | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChecklist = async () => {
      const savedChecklist = localStorage.getItem('checklist');
      
      if (savedChecklist) {
        const parsedChecklist = JSON.parse(savedChecklist);
        const restoredItems = parsedChecklist.items.map((item: any) => new ChecklistItem(
          item.id,
          item.title,
          item.descriptionComplete,
          item.descriptionPartial,
          item.descriptionIncomplete,
          item.currentState
        ));
        const restoredChecklist = new Checklist(parsedChecklist.title, restoredItems);
        setChecklist(restoredChecklist);
        setLoading(false);
        return;
      }
      
      const api = new CheckListApi();
      const data = await api.GetCheckList();
  
      const items = data.map((item: any) => new ChecklistItem(
        item.id,
        item.title,
        item[5],
        item[4],
        item[3],
        'incomplete'
      ));
  
      const uniqueItems = items.reduce((accumulator: ChecklistItem[], current: ChecklistItem) => {
        if (!accumulator.find(item => item.title === current.title)) {
          accumulator.push(current);
        }
        return accumulator;
      }, [] as ChecklistItem[]);
  
      const checklistData = new Checklist(requestBody.task_name, uniqueItems);
      
      localStorage.setItem('checklist', JSON.stringify({
        title: checklistData.title,
        items: uniqueItems
      }));
  
      setChecklist(checklistData);
      setLoading(false);
    };
  
    fetchChecklist();
  }, []);

  return [checklist, isLoading];
};

export default useChecklist;
