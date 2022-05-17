/** @format */
import Link from 'next/link';

import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function AboutPage(): JSX.Element {
	return (
		<>
			<h1 className='title'>About Page</h1>

			<h1 className='title'>
				{/* Ir a <a href='/'>Home</a> */}
				Ir a <Link href={{ pathname: '/' }}>Home</Link>
				{/* El componente "Link" de Next es la que utilizamos para hacer la navegación. */}
			</h1>
		</>
	);
}

/**
 * Forma correcta para anidar layouts.
 * @param page
 * @returns Nuestros layouts anidados.
 */

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
