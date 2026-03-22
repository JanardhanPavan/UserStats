import { Link } from "react-router-dom"
const Navbar = () => {
  return (
      <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">UserStats</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/events" className="hover:text-orange-400 transition">Events</Link>
          <Link to="/feedback" className="hover:text-orange-400 transition">Give Feedback</Link>
          <Link to="/reviews" className="hover:text-orange-400 transition">Reviews</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar