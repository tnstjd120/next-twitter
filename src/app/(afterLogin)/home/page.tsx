import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />

        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Post key={i} />
          ))}
      </TabProvider>
    </main>
  );
}
