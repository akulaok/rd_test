import ResultText from '../../components/ResultText/ResultText';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import Statistic from '../../components/Statistic/Statistic';
import styles from './ResultPage.module.css'
import CopyButton from '../../components/CopyButton/CopyButton';

function ResultPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div>
          <ResultText />
          <div className={styles.buttonsBox}>
            <ReturnButton />
            <CopyButton/>
          </div>
        </div>
        <Statistic />
      </div>
    </div>
  );
}
export default ResultPage;
