/** @format */
import Link from 'next/link';
import { useRouter } from 'next/router';

// Se deja el objeto fuera del componente de React para evitar que sea reprocesado en caso de que se vuelva a renderizar.
const style = {
	color: '#0070f3',
	textDecoration: 'underline',
};

// De esta forma se desestructuran las props.
export const ActiveLink = ({ text, href }) => {
	const { asPath } = useRouter(); // Hook que ya nos ofrece next con toda la información de la ruta;

	return (
		<Link href={href}>
			{/* Esta es otra forma de utilizar los estilos. Sin necesidad de agregar su className en un fichero aparte. */}
			<a style={asPath === href ? style : null}>{text}</a>
			{/* De esta forma podemos añadir estilos condicionales en caso de encontrarnos en esa ruta.*/}
		</Link>
	);
};
