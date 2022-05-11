import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);

	useEffect(() => {
		(async () => {
			const _howtos = (await axios.get(url)).data;
			const _filteredHowtos = _howtos.filter(m => m.category.toLowerCase() === 'php');
			setHowtos(_filteredHowtos);
		})();
	}, []);

	return (
		<>
			<h2>Howtos</h2>
			<p>These are my PHP howtos:</p>
			<div className="howtos">
				{howtos.map((howto, index) => {
					return (
						<div className="howto" key={index}>
							<div className="title">
								<a target="_blank" href={`https://edwardtanguay.netlify.app/howtos?id=${howto.id}`}>
									{howto.title}
								</a>
							</div>
							<pre className="body">{howto.body}</pre>
						</div>
					);
				})}
			</div>
		</>
	);
};
