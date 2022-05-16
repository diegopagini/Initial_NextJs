/** @format */
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

export const Navbar = () => {
	return (
		// Esta es la forma de utilizar estilos en Next. Llamando a su módulo.
		<nav className={styles['menu-container']}>
			<ActiveLink text='Home' href='/' />
			<ActiveLink text='About' href='/about' />
			<ActiveLink text='Contact' href='/contact' />
		</nav>
	);
};
