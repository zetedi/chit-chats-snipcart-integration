import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeComplete', nProgress.done);
Router.events.on('routeChangeError', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
