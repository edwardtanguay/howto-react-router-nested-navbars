import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);
	let { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const _howtos = (await axios.get(url)).data;
			const _filteredHowtos = _howtos.filter(
				(m) => m.category.toLowerCase() === 'php'
			);
			setHowtos(_filteredHowtos);
		})();
	}, []);

	const getCurrentHowto = () => {
		if (id) {
			return howtos.find((m) => m.id == id);
		} else {
			if (howtos.length > 0) {
				const _id = String(howtos[0].id);
				navigate(_id);
			}
		}
	};

	return (
		<div className="page_howtos">
			<h2>Howtos</h2>
			<p>These are my PHP howtos:</p>

			<nav>
				{howtos.map((howto, index, arr) => {
					return (
						<>
							<NavLink className="navlink" to={`${howto.id}`}>
								{howto.title}
							</NavLink>
							{index < arr.length - 1 && (
								<span className="separator">|</span>
							)}
						</>
					);
				})}
			</nav>

			<Outlet context={getCurrentHowto()} />
		</div>
	);
};
