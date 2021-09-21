import { GetServerSideProps } from 'next';

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.end('OK');
  return {
    props: {},
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (): React.ReactNode => null;
