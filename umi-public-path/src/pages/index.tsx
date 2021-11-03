import styles from './index.less';
// import Test from 'test/test';
import("atest").then((res)=>{
  console.log('----------');
  console.log(res);
})
// console.log('Test',Test);
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
