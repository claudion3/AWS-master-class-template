import { useState } from 'react';

function useNotifications() {
	const [notifications, setNotifications] = useState([]);

	const createNotification = text => {
		// hint: use setTimeout
		return setTimeout(() => {
			setNotifications(text);
		}, 1000);
	};

	return { notifications, createNotification };
}

export default useNotifications;
