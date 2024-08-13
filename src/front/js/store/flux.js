const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			currentUser: [],
			token: undefined
		},
		actions: {
			getUsers: async () => {
				const response = await fetch
					('https://bookish-happiness-69vxrq465xjj34pqq-3001.app.github.dev/api/users', {
						method: 'GET'
					})
				const body = await response.json()
				setStore({
					users: body.users
				})
				console.log('fetched users')
			},

			createUser: async (username, password) => {
				const response = await fetch('https://bookish-happiness-69vxrq465xjj34pqq-3001.app.github.dev/api/signup', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"username": `${username}`,
						"password": `${password}`,
						"is_active": true,
					}),
				});
				const body = await response.json();
				// setStore({
				// 	users: [...users, body.users]
				// })
				console.log('new contact created')
				return 200;
			},

			LoginUser: async (username, password) => {
				const response = await fetch('https://bookish-happiness-69vxrq465xjj34pqq-3001.app.github.dev/api/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"username": `${username}`,
						"password": `${password}`,
					}),
				});
				const body = await response.json();
				const token = body.token
				if(response.ok){
					setStore({
						"token": token
					})
				}
				return response.ok;
			},

			GetPrivateData: (username, password) => {
				try {
					for(let user of getStore().users) {
						if(username == user.username){
							// setStore({
							// 	currentUser: user
							// })
							console.log("Hey, I grabbed the user!")
						}
					}
				} catch (error) {
					console.log("There was an error", error)
				}
			},

			LogoutUser: () => {
				try {
					setStore({
						"token": undefined
					})
				} catch (error) {
					console.log("There was an error", error)
				}
			}
		}
	};
};

export default getState;