import Trend from "./Trend";
import styles from "./trendContainer.module.css";

export default function TrendContainer() {
  return (
    <div className={styles.trendBg}>
      <div className={styles.trend}>
        <h3>나를 위한 트렌드</h3>

        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Trend key={i} />
          ))}
      </div>
    </div>
  );
}
