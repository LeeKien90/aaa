import React from 'react'
import {Switch,Route} from 'react-router-dom'

// auth

import SignIn from '../views/dashboard/auth/sign-in'
import SignUp from '../views/dashboard/auth/sign-up'


const SimpleRouter = () => {
    return (
            <>
            <Switch>

                {/* auth */}   
                <Route exact path="/auth/sign-in"      component={SignIn}/>
                <Route exact path="/auth/sign-up"      component={SignUp}/>       
            </Switch>
               
            </>
    )
}

export default SimpleRouter
