import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Authorizer({children}) {
    const [Auth, setAuth] = useState(false)
    
    return (Auth ? children : <Navigate to='/login'/>)
}

export default Authorizer
