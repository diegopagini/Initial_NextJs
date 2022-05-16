/** @format */
import Link from 'next/link';

import { MainLayout } from '../components/layouts/MainLayout';

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
		<MainLayout>
			<h1 className={'title'}>Home Page</h1>

			<h1 className={'title'}>
				{/* Ir a <a href='/about'>About</a> */}
				Ir a <Link href='/about'>About</Link>
				{/* El componente "Link" de Next es la que utilizamos para hacer la navegación. Y que no hace un full refresh del sitio.
						Como en una SPA. Hace un prefetch para que de ese comportamiento. */}
			</h1>
		</MainLayout>
	);
}
