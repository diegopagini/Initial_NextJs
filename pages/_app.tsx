/** @format */
import '../styles/globals.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

/**
 * Estilos globales de la aplicación.
 */
function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
	// Función que utlizamos para preguntar si nuestro componente tiene la función getLayout y aplicarlo, o renderizar la página.
	const getLayout = Component.getLayout || ((page) => page);

	// return <Component {...pageProps} />;
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
