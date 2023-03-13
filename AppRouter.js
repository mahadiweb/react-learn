import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const AppRouter = () => {
	return(
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />}/>
					<Route path='/login' element={<Login/>} />
				</Routes>
			</Router>
		</>
	);
	
}

export default AppRouter;