
import { Box } from '@mui/system';
// import { BrowserRouter as Router} from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import './App.css';
import { Home } from './component/Home';


function App() {
	return (
		<Box >
			<Home/>
			{/* <Router>
				<Switch>
					<Route exact path="/" component={Navbar}/>
				</Switch>
			</Router> */}
		</Box>
	);
}

export default App;
