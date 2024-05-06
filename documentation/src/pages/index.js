import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectReadme from "../components/ReademeMD";
import styles from './index.module.css';
import MDXContent from '@theme/MDXContent';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            {/* TODO: Change me to your project's tutorial*/ }
          <Link
            className="button button--secondary button--lg"
            to="/tutorial/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={`${siteConfig.title}`}
        description="A kid-friendly handheld gaming device and block-based coding suite that makes it easy to create, play, and share custom games.">
        <HomepageHeader/>
        <main>
            <MDXContent>
                <ProjectReadme/>
            </MDXContent>
        </main>
    </Layout>
  );
}
