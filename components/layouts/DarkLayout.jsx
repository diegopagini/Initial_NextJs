/** @format */

// High order component. No es más que un componente que recibe componentes hijos.
export const DarkLayout = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: 'rgba(0,0,0,0.3)',
				borderRadius: '5px',
				padding: '1rem',
			}}
		>
			<h3>Dark-Layout</h3>
			<div>{children}</div>
		</div>
	);
};
