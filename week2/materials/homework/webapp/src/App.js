import { useEffect } from 'react';
import Products from './components/Products';
import Header from './components/Header';
import useNotifications from './hooks/useNotification';

function App() {
	const { notifications, createNotification } = useNotifications();

	useEffect(() => {
		createNotification('text-success');
	});

	return (
		<div className='container'>
			<Header />
			<h1 className={notifications.length > 0 ? 'text-white' : 'text-success'}>
				Good Green Groceries
			</h1>
			<Products />
		</div>
	);
}

export default App;
