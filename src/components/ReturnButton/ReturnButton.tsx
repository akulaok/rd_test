import { Link } from 'react-router-dom';
import styles from '../../pages/ResultPage/ResultPage.module.css'
import { AppRoute } from '../../consts';

function ReturnButton(): JSX.Element {

  return (
    <Link  to={AppRoute.Checklist} className={styles.button}>
        < div className={styles.buttonImg}></div>
        <span>Назад</span>
    </Link>
  );
}
export default ReturnButton;
