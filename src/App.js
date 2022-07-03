import './App.css';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import About from './About';
import LearningBlogs from './LearningBlogs';
import NewBlog from './NewBlog';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Tabs />}>
            <Route path='about' element={<About />} />
            <Route path="blogs" element={<LearningBlogs />} />
            <Route path="newBlog" element={<NewBlog />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
