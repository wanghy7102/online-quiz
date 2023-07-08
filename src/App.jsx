import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Layout from "./Layout";
import Quiz from "./Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/online-quiz/" element={<Layout />}>
          <Route index element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
