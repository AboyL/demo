import styles from './index.less';
import img from 'l-lerna-test-base/lib/test.jpg';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <img src={img} />
    </div>
  );
}
