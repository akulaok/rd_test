import { Link } from 'react-router-dom';
import styles from '../../pages/ChecklistPage/ChecklistPage.module.css'
import { AppRoute } from '../../consts';

function ChecklistButton(): JSX.Element {

  return (
    <Link to={AppRoute.Result} className={styles.button}>
      <span className={styles.buttonText}> Сформировать обратную связь </span>
      < div className={styles.buttonImg} > </div>
    </Link>

  );
}
export default ChecklistButton;
