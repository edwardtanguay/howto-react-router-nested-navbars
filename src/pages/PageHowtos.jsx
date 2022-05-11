import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);

useEffect(() => {
	(async () => {
		setHowtos((await axios.get(url)).data);
	})();
}, []);

	return (
		<>
			<h2>Howtos</h2>
			<p>These are my howtos:</p>
			<div className="howtos">
				{howtos.map((howto, index) => {
					return <div className="howto" key={index}>{howto.title}</div>;
				})}
			</div>
		</>
	);
};
