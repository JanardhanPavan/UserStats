import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Home from "./components/Home"
import Events from "./pages/Events"
import FeedbackForm from "./pages/FeedbackForm"
import FeedbackList from "./pages/FeedbackList"


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/feedback" element={<FeedbackForm/>} />
        <Route path="/reviews" element={<FeedbackList />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App