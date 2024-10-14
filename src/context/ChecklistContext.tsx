import { createContext, ReactNode, useEffect, useState } from 'react';
import { Checklist } from '../models/Checklist';
import useChecklist from '../components/hooks/useChecklist';
import { ChecklistItem } from '../models/ChecklistItem';

type ChecklistContextType = {
  checkList: Checklist | null;
  isLoading: boolean;
  updateCheckListItem: (item: ChecklistItem) => void;
  username: string;
  updateUsername: (name: string) => void;
  CompletedStatistic: string,
  IncompleteStatistic: string
};

export const ChecklistContext = createContext<ChecklistContextType | undefined>(undefined);

export const ChecklistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [initialCheckList, isLoading] = useChecklist();
  const [checkList, setCheckList] = useState<Checklist | null>(initialCheckList);
  const [username, setUsername] = useState<string>(localStorage.getItem('username') || '');
  const CompletedStatistic = `${checkList?.getCompletedCount()}/${checkList?.items.length}`;
  const IncompleteStatistic = `${checkList?.getIncompleteCount()}/${checkList?.items.length}`;

  useEffect(() => {
    if (!isLoading && initialCheckList) {
      setCheckList(initialCheckList);
    }
  }, [isLoading, initialCheckList]);

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  const updateCheckListItem = (updatedItem: ChecklistItem) => {
    if (checkList) {
      const updatedItems = checkList.items.map(item =>
        item.title === updatedItem.title ? updatedItem : item
      );

      if (updatedItems !== checkList.items) {
        const updatedCheckList = new Checklist(checkList.title, updatedItems);
        setCheckList(updatedCheckList);
        localStorage.setItem('checklist', JSON.stringify({
          title: updatedCheckList.title,
          items: updatedItems,
        }));
      }
    }

  };

  const updateUsername = (name: string) => setUsername(name);

  return (
    <ChecklistContext.Provider value={{ checkList, isLoading, updateCheckListItem,username,updateUsername,CompletedStatistic, IncompleteStatistic}}>
      {children}
    </ChecklistContext.Provider>
  );
};
