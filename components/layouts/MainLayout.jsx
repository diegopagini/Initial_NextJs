/** @format */
import Head from 'next/head';

import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

// Los Layouts son componentes que se reutilizan para mostrar la misma vista en lugares repetidos.

export const MainLayout = ({ children }) => {
	return (
		<div className={styles.container}>
			{/* "Head" es el componente propio que ofrece Next para generar meta tags en cada página. Ideal para el SEO.
				Reemplaza la etiqueta head de nuestra página por defecto. */}
			<Head>
				<title>Home - Next</title>
				<meta name='description' content='Home Page' />
				<meta name='keywords' content='Curso, next.js' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className={styles.main}>{children}</main>
			{/* La prop children es la que utilizamos para enviar html dentro de nuestro componente. */}
		</div>
	);
};
