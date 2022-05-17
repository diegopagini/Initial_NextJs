/** @format */
import Link from 'next/link';

import { MainLayout } from '../../components/layouts/MainLayout';

// En caso de crear nuestra página dentro de una carpeta es necesario que su nombre sea index.

export default function Conctact() {
	return (
		<MainLayout>
			<h1>Concat Page</h1>

			<h1 className={'title'}>
				Ir a <Link href={{ pathname: '/' }}>Home</Link>
				{/* El componente "Link" de Next es la que utilizamos para hacer la navegación. */}
			</h1>
		</MainLayout>
	);
}
