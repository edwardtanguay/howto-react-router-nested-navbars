import { BookGroupFantasy } from '../components/BookGroupFantasy';
import { BookGroupPolitics } from '../components/BookGroupPolitics';
import { BookGroupTechnology } from '../components/BookGroupTechnology';

export const PageBooks = () => {
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>This is the book page.</p>
			<BookGroupFantasy />
			<BookGroupPolitics />
			<BookGroupTechnology />
		</div>
	);
};
