/** @format */
import '../styles/globals.css';

/**
 * Estilos globales de la aplicación.
 */
function MyApp({ Component, pageProps }) {
	// Función que utlizamos para preguntar si nuestro componente tiene la función getLayout y aplicarlo, o renderizar la página.
	const getLayout = Component.getLayout || ((page) => page);

	// return <Component {...pageProps} />;
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
