/** @format */
import Head from 'next/head';

import styles from '../styles/Home.module.css';

/**
 * Esta forma de importar estilos genera encapsulación.
 */

/**
 * Simple componente en Next.
 * La extension puede ser tanto .js como .jsx.
 * Los componentes no pueden tener su nombre capitalizado. Deben estar en minúscula.
 */
export default function HomePage() {
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

			<main className={styles.main}>
				<h1 className={styles.title}>
					Ir a <a href='/about'>About</a>
				</h1>
			</main>
		</div>
	);
}
