import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Breadcrumb from "./Components/BreadCrum";
import MenuBar from "./Components/MenuBar";
import Governoment from "./Components/Pages/Governoment";
// import Policy from './Components/Pages/Policy';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Elections from "./Components/Pages/Elections";
import UserProfile from "./Components/Pages/UserProfile";
import Policy from "./Components/Pages/Policy";
import Public from "./Components/Pages/Public";
import Home from "./Components/Pages/Home";
import Search from "./Components/Pages/Search";
import About from "./Components/Pages/About Page";
import Login from "./Components/Pages/Login";

const app = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Breadcrumb />
        <MenuBar />
      </div>

      <Switch>
        <Route path="/Private"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Public />;
          }
        } />

        <Route path="/Public"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Public />;
          }
        } />

        <Route path="/Governoment"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Governoment />;
          }
        } />

        <Route path="/Election"   render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Elections />;
          }
        } />

        <Route path="/Policy"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Policy />;
          }
        } />
        <Route path="/UserProfile"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <UserProfile />;
          }
        } />
        <Route path="/Search"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Search />;
          }
        } />

        <Route path="/About"  render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <About />;
          }
        } />

        <Route path="/Home"   render={
          props => {
            if(!localStorage.getItem('JWT-Token')) return <Redirect to="/" />;
            return <Home />;
          }
        } />

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default app;

// class App extends Component {

//   componentDidMount() {
//     // Axios Request
//     // axios.get(`URL`)
//     //   .then(res => {
//     //     const persons = res.data;
//     //     this.setState({ persons });
//     //   })
//   }

//   render() {
//     return (
//     );
//   }
// }

// export default App;
