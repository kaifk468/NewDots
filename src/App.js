import './App.css';
import NavBar from './components/NavBar';
import NewsComponet from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
            <NavBar />
      <div>
            <Routes>
              <Route exact path="/business" element={<NewsComponet key="business" country="in" category="business"/>}/>
              <Route exact path="/sports" element={<NewsComponet key="sports" country="in" category="sports"/>}/>
              <Route exact path="/" element={<NewsComponet key="general" country="in" category="general"/>}/>
              {/* <Route exact path="/entertainment"><NewsComponet key="" country="in" category="entertainment"/></Route> */}
              <Route exact path="/entertainment" element={<NewsComponet key="entertainment" country="in" category="entertainment"/>}/>
              <Route exact path="/science" element={<NewsComponet key="science" country="in" category="science"/>}/>
              <Route exact path="/health" element={<NewsComponet key="health" country="in" category="health"/>}/>
              <Route exact path="/technology" element={<NewsComponet key="technology" country="in" category="technology"/>}/>
        </Routes>
        
      </div>
      </div>
    </Router>
  );
}

export default App;
