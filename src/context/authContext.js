import { createContext, useContext, useState } from "react"

const fakeAuth = {
	isAuthenticated: false,
	signin(cb) {
		fakeAuth.isAuthenticated = true
		setTimeout(cb, 100) // fake async
	},
	signout(cb) {
		fakeAuth.isAuthenticated = false
		setTimeout(cb, 100)
	},
}

const authContext = createContext()

export function ProvideAuth({ children }) {
	const auth = useProvideAuth()
	return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export function useAuth() {
	return useContext(authContext)
}

export function useProvideAuth() {
	const [user, setUser] = useState(null)

	const signin = (cb) => {
		return fakeAuth.signin(() => {
			setUser("user")
			cb()
		})
	}

	const signout = (cb) => {
		return fakeAuth.signout(() => {
			setUser(null)
		})
	}

	return {
		user,
		signin,
		signout,
	}
}
