import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface IndexProps {
  title: string;
}

const index: React.FC<IndexProps> = ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
  </>
);

/**
 * This is getServerSideProps to verify that the ENV is working,
 * nota that this functionality (because of the static nature of the data)
 * will fit better in the getStaticProps paradigm
 */
// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<IndexProps> = async () => ({
  props: {
    title: `Hello BinPar template!`,
  },
});

export default index;
