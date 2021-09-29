import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import { FaRegClock } from 'react-icons/fa';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>

<div className="container-fluid introheader">
<iframe width="100%" height="100%" src="https://nodebox.live/embed/julio/speraxlogo1/main?autoplay=true"></iframe>
 </div>
     <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Build with Sperax - 5 min. Tutorial  <><FaRegClock /></>
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Connecting you with modern money">
      <HomepageHeader />
      
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
