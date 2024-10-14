import ChecklistButton from '../../components/ChecklistButton/ChecklistButton';
import useChecklist from '../../components/hooks/useChecklist';
import NameQuestion from '../../components/NameQuestion/NameQuestion';
import Checklist from '../../components/Checklist/Checklist';
import Statistic from '../../components/Statistic/Statistic';
import LoadingPage from '../LoadingPage/LoadingPage';
import styles from './ChecklistPage.module.css';
import { useContext } from 'react';
import { ChecklistContext } from '../../context/ChecklistContext';

function ChecklistPage(): JSX.Element {
  const { isLoading } = useContext(ChecklistContext)!;

  return (
    isLoading
      ? (
        <LoadingPage />
      ) : (
        <div className={styles.page}>
          <div className={styles.wrapper}>
            <form>
              <NameQuestion />
              <Checklist />
              <ChecklistButton />
            </form>
            <Statistic/>
          </div>
        </div>)
  );
}

export default ChecklistPage;
