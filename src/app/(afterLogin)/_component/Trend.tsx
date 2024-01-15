import Link from "next/link";
import styles from "./trend.module.css";

export default function Trend() {
  return (
    <Link className={styles.container} href={`/search?q=트렌드`}>
      <small>실시간 트렌드</small>
      <strong>제로초</strong>
      <small>1,234 posts</small>
    </Link>
  );
}
