import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Test from '../test';

import ColorSwitcher from 'Components/ColorSwitcher'
import { NotificationContainer } from "Components/ReactNotifications";

import { defaultStartPath } from 'Constants/defaultValues'

import { connect } from "react-redux";

import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from 'Routes/pages/login'
import register from 'Routes/pages/register'
import error from 'Routes/pages/error'
import forgotPassword from 'Routes/pages/forgot-password'
import 'Assets/css/vendor/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Businesses from "../components/Businesses";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Listorders from "../components/Listorders";
import Transactions from "../components/Transactions";
import Users from "../components/Users";
import Listusers from "../components/Listusers";
import Cities from "../components/Region/Cities";
import States from "../components/Region/States";
import Businessesparking from "../components/Parking/Businessesparking";
import Ordersparking from "../components/Parking/Ordersparking";
import Transactionsparking from "../components/Parking/Transactionsparking";
import Businesseshome from "../components/Home/Businesseshome";
import Ordershome from "../components/Home/Ordershome";
import Newordersh from "../components/Home/Newordersh";
import Transactionshome from "../components/Home/Transactionshome";
import Brandscar from "../components/Car/Brandscar";
import Businessescar from "../components/Car/Businessescar";
import Modelscar from "../components/Car/Modelscar";
import Orderscar from "../components/Car/Orderscar";
import Transactionscar from "../components/Car/Transactionscar";
import Regin from "../components/Regin";
import Parking from "../components/Parking";
import Car from "../components/Car.js";
import Home from "../components/Home";
import Modiriyat from "../components/app/modiriyat.js";
import Amlak from "../components/Amlak";
import Niyazmandi from "../components/Niyazmandi"
import Buycar from "../components/Buycar";
import Mynahang from "../components/Mynahang";
import Test12 from "../components/Testtt";
import Componentt from "../components/app/Component.js";
import Rorders from "../components/Home/madarek/Rorders";
import Newordersc from "../components/Car/Newordersc";
import Newordersp from "../components/Parking/Newordersp";




const InitialPath = ({ component: Component, authUser, ...rest }) =>
	<Route
		{...rest}
		render={props =>
			<Component {...props} />}
			/>

class App extends Component {

	render() {
		const { location, match, user, locale } = this.props;
		const currentAppLocale = AppLocale[locale];
		if (location.pathname === '/' || location.pathname === '/app' || location.pathname === '/app/') {
			return (<Redirect to={defaultStartPath} />);
		}
		return (
			<Fragment>
				<IntlProvider
					locale={currentAppLocale.locale}
					messages={currentAppLocale.messages}
				>

					<Fragment>
						<NotificationContainer />
						<Switch>
							<InitialPath
								path={`${match.url}app`}
								authUser={user}
								component={MainRoute}
							/>
							<Route path={`/login`} component={login} />
							<Route path={'/test'} component={Test} />
							<Route path={`/register`} component={register} />
							<Route path={`/forgot-password`} component={forgotPassword} />
							<Route path={`/error`} component={error} />
							<Route path='/businesses' component={Businesses}/>
							<Route path='/dashboard' component={Dashboard}/>
							<Route path='/orders' component={Orders}/>
							<Route path='/transactions' component={Transactions}/>
							<Route path='/users' component={Users}/>
							<Route path='/cities' component={Cities}/>
							<Route path='/states' component={States}/>
							<Route path='/businessesparking' component={Businessesparking}/>
							<Route path='/ordersparking' component={Ordersparking}/>
							<Route path='/transactionsparking' component={Transactionsparking}/>
							<Route path='/businesseshome' component={Businesseshome}/>
							<Route path='/ordershome' component={Ordershome}/>
							<Route path='/transactionshome' component={Transactionshome}/>
							<Route path='/brandscar' component={Brandscar}/>
							<Route path='/businessescar' component={Businessescar}/>
							<Route path='/modelscar' component={Modelscar}/>
							<Route path='/orderscar' component={Orderscar}/>
							<Route path='/transactionscar' component={Transactionscar}/>
							<Route path='/listusers' component={Listusers}/>
							<Route path='/listorders' component={Listorders}/>
							<Route path='/regin' component={Regin}/>
							<Route path='/parking' component={Parking}/>
							<Route path='/car' component={Car}/>
							<Route path='/home' component={Home}/>
							<Route path='/modiriyat' component={Modiriyat}/>
							<Route path='/amlak' component={Amlak}/>
							<Route path='/niyazmandi' component={Niyazmandi}/>
							<Route path='/buycar' component={Buycar}/>
							<Route path='/mynahang' component={Mynahang}/>
							<Route path='/Newordersh/home' component={Newordersh}/>
							<Route path='/Component' component={Componentt}/>
							<Route path='/test12' component={Test12}/>
							<Route path='/Rorders' component={Rorders}/>
							<Route path='/Newordersc/car' component={Newordersc}/>
							<Route path='/Newordersp/parking' component={Newordersp}/>


							<Redirect to="/error" />
						</Switch>
						<ColorSwitcher />
					</Fragment>
				</IntlProvider>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ authUser, settings }) => {
	const { user } = authUser;
	const { locale } = settings;
	return { user, locale };
};

export default connect(mapStateToProps, {})(App);

