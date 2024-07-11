import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/update" element={<Update />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

