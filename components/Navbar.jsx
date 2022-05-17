/** @format */
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
	{
		text: 'Home',
		href: '/',
	},
	{
		text: 'About',
		href: '/about',
	},
	{
		text: 'Contact',
		href: '/contact',
	},
	{
		text: 'Pricing',
		href: '/pricing',
	},
];

export const Navbar = () => {
	return (
		// Esta es la forma de utilizar estilos en Next. Llamando a su módulo.
		<nav className={styles['menu-container']}>
			{menuItems.map((item, i) => (
				<ActiveLink text={item.text} href={item.href} key={i} />
			))}
			{/* <ActiveLink text='Home' href='/' />
			<ActiveLink text='About' href='/about' />
			<ActiveLink text='Contact' href='/contact' />
			<ActiveLink text='Pricing' href='/pricing' /> */}
		</nav>
	);
};
