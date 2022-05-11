import { useState, useEffect } from 'react';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);

	return (
		<>
			<h2>Howtos</h2>
			<p>These are my howtos:</p>
			<ul className="howtos">
				{howtos.map((howto, index) => {
					return (
						<li key={index}>nnn</li>
					)
				})}	
			</ul>
		</>
	);
};