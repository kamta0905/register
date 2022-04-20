import { Navigate, Route, useLocation } from "react-router-dom"

import { useAuth } from "../context/authContext"

function PrivateRoute({ children, ...rest }) {
	let auth = useAuth()
	let location = useLocation()

	if (!auth.user) {
		return <Navigate to="/login" state={{ from: location }} />
	}

	return children
}

export default PrivateRoute
