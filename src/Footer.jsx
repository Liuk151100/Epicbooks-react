import styles from './Footer.module.css';

function MyFooter() {
  return (
    <footer className={styles.footerWrapper}>
      <ul className={styles.navLinks}>
        <li>
          <a href="#" className={styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Features
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            About
          </a>
        </li>
      </ul>
      <p className={styles.copyText}>© 2025 EpicBooks, Inc.</p>
    </footer>
  );
}

export default MyFooter;
