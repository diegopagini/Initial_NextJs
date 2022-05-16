/** @format */
import Head from 'next/head';

import styles from '../styles/Home.module.css';

/**
 * Simple componente en Next.
 * La extension puede ser tanto .js como .jsx.
 * Los componentes no pueden tener su nombre capitalizado. Deben estar en minúscula.
 */
export default function HomePage() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - NextJs</title>
				<meta name='description' content='Home Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Ir a <a href='/about'>About</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>
			</main>
		</div>
	);
}
