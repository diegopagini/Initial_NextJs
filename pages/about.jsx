/** @format */
import Link from 'next/link';

import { MainLayout } from '../components/layouts/MainLayout';

export default function AboutPage() {
	return (
		<MainLayout>
			<h1 className='title'>About Page</h1>

			<h1 className='title'>
				{/* Ir a <a href='/'>Home</a> */}
				Ir a <Link href={{ pathname: '/' }}>Home</Link>
				{/* El componente "Link" de Next es la que utilizamos para hacer la navegación. */}
			</h1>
		</MainLayout>
	);
}
