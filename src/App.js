import Home from "./pages/home/Home";

import List from "./pages/list/List";
import Single from "./pages/single/Single";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/dark.scss";



function App() {
 

  return (
    
    
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}
            />
            
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
