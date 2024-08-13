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
					console.log(getStore().users)
				} catch (error) {
					console.log("There was an error", error)
				}
			}
		}
	};
};

export default getState;


// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			message: null,
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},

// 			getMessage: async () => {
// 				try{
// 					// fetching data from the backend
// 					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
// 					const data = await resp.json()
// 					setStore({ message: data.message })
// 					// don't forget to return something, that is how the async resolves
// 					return data;
// 				}catch(error){
// 					console.log("Error loading message from backend", error)
// 				}
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;
