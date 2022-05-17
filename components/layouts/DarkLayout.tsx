/** @format */
import React, { PropsWithChildren } from 'react';

type Props = {};

// High order component. No es más que un componente que recibe componentes hijos.
export const DarkLayout: React.FC<PropsWithChildren<Props>> = ({
	children,
}) => {
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
