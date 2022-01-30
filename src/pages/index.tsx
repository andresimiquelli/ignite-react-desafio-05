import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>blog - andresimiquelli</title>
      </Head>
      <main className={styles.content}>
        <div>
          <h2>Post title</h2>
          <p>Post description</p>
          <div>
            <div>
              <span>Date</span>
            </div>
            <div>
              <span>Autor</span>
            </div>
          </div>
        </div>
      </main>
    </>    
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
