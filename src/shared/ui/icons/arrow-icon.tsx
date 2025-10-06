import React from 'react';
import type { Icon } from './interfaces';

export const ArrowIcon: React.FC<Icon> = ({ color, ...props }) => {
	return (
		<svg
			{...props}
			fill="none"
			viewBox="0 0 12 8"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.25 1.375L6 6.625L0.75 1.375"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
