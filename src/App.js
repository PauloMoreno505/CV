
import { Box } from '@mui/system';
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Home } from './Component/Home'
import { AddUser } from './Component/AddUser'
import { EditUser } from './Component/EditUser'
import { GlobalProvider } from './context/GlobalState';
import Dashboard from './Component/home/index'
import VideoPlayer from './Component/VideoPlayer'
import ImagePost from './Component/FaceBookImagePost'
import './App.css';


function App() {
  return (
    <Box>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add" component={AddUser}/>
            <Route exact path="/edit/:id" component={EditUser}/>
            <Route exact path="/fb" component={ImagePost}/>
            <Route exact path="/video" component={VideoPlayer}/>
            <Route exact path="/personal" component={Dashboard}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </Box>
  );
}

export default App;
