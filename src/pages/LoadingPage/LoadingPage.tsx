import styles from './LoadingPage.module.css'

function LoadingPage(): JSX.Element {

  return (
    <div className={styles.page}>
      <section className={styles.wrapper}>
        <div className={styles.loader}></div>
        <span className={styles.text}>Идет загрузка</span>
      </section>
    </div>
  );
}
export default LoadingPage;
