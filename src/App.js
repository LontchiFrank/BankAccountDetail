import "./App.css";
import FirstVr from "./pages/FirstVr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormInput from "./pages/FormInput";
import ViewClients from "./pages/ViewClients";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route exact path="/" element={<FirstVr />} />
        <Route exact path="/form" element={<FormInput />} />
        <Route exact path="/viewclient" element={<ViewClients/>}/>
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
