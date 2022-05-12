import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Alert from "../components/alert";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>Hi! This is Kyungseok Oh...</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {/* <ul>
          {moviesData.map(({ id, title, genre }) => (
            <li key={id}>
              {title}
              <br />
              {genre.split("|").map((eachGenre) => (
                <button key={eachGenre}>{eachGenre}</button>
              ))}
            </li>
          ))}
        </ul> */}
        <Alert type="success">
          <p>This is success alert...</p>
        </Alert>
        <Alert type="error">
          <p>This is error alert...</p>
        </Alert>
      </section>
    </Layout>
  );
}
