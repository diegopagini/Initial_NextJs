/** @format */
import Head from 'next/head';
import Link from 'next/link';

import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About - Next</title>
				<meta name='description' content='About Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className={styles.main}>
				<h1>About Page</h1>

				<h1 className={styles.title}>
					{/* Ir a <a href='/'>Home</a> */}
					Ir a <Link href={{ pathname: '/' }}>Home</Link>
					{/* El componente "Link" de Next es la que utilizamos para hacer la navegación. */}
				</h1>
			</main>
		</div>
	);
}
