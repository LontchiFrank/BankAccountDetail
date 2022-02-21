import "./App.css";
import FirstVr from "./pages/FirstVr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormInput from "./pages/FormInput";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route exact path="/" element={<FirstVr />} />
        <Route exact path="/form" element={<FormInput />} />
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
