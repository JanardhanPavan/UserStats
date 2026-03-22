const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-2 ">
      <h2 className="text-5xl font-extrabold">Welcome to UserStats</h2>
      <p className="max-w-2xl text-lg mb-4">Your feedback helps us shape future innovations. Submit your thoughts 
        on Userstats events and view what others are saying😊</p>
        <div className="mb-4">
          <button className="bg-red-600 px-6 py-4 rounded-2xl mb-4 text-white hover:bg-orange-500 hover:scale-105 transition-all">Get Started</button>
        </div>
    </div>
  )
}

export default Home