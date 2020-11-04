import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import {Homepage} from "../../pages/home/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import Header from "../header/Header";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import CheckoutPage from "../../pages/checkout/CheckoutPage";
import {selectCurrentUser} from "../../redux/user/userSelectors";
import {checkUserSession} from "../../redux/user/userActions";

const App = ({checkUserSession, currentUser}) => {

    useEffect(
        () => {
            console.log('useEffect - App component')
            checkUserSession()
        }, [checkUserSession]
    )

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route exact path="/signin"
                           render={() => currentUser ? <Redirect to='/'/> : <SignInUp/>}/>
                    <Route exact path="/checkout" component={CheckoutPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
