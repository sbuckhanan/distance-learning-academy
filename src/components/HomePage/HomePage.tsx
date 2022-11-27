import { UserState } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';

export function HomePage() {
	const user = useSelector((store: UserState) => store.user);
	return (
		<div>
			<h1>Hello {user.username}</h1>
		</div>
	);
}
