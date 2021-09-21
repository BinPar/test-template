import { AppProps } from 'next/app';
import 'src/styles/default.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
