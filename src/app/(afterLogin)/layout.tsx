import Image from "next/image";
import { ReactNode } from "react";

import styles from "./layout.module.css";
import Link from "next/link";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendContainer from "./_component/TrendContainer";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftAreaWrapper}>
        <div className={styles.leftAreaInner}>
          <div className={styles.leftAreaFixed}>
            <Link className={styles.logo} href="/home">
              <h1>
                <Image src="/zlogo.png" alt="logo" width={50} height={50} />
              </h1>
            </Link>

            <nav>
              <ul>
                <NavMenu />
              </ul>
            </nav>

            <LogoutButton />
          </div>
        </div>
      </header>

      <div className={styles.rightAreaWrapper}>
        <div className={styles.rightAreaInner}>
          <>{children}</>

          <aside>
            <form className={styles.search}>
              <label htmlFor="">
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
              </label>

              <input type="search" placeholder="검색" />
            </form>

            <div className={styles.followRecommend}>
              <TrendContainer />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
