import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, loggedInUser, ...rest}) => (
    <Route {...rest} render={(props) => {
        if (loggedInUser) {
            return <Component {...props}/>
        } else {
            return <Redirect to={{
                pathname: "/login"
            }}/>
        }
    }
    }/>
)

export default PrivateRoute