
import { Box } from '@mui/system';
import './App.css';
import { Home } from './component/PCHome';
import { MobileHome } from './component/MobileHome';


function App() {
	return (
		<Box >
			<Box sx={{display:{sm:'none', xs:'none', md:'flex'}}}>
				<Home/>
			</Box>
			<Box sx={{display:{sm:'flex', xs:'flex', md:'none'}}}>
				<MobileHome/>
			</Box>
		</Box>
	);
}

export default App;
