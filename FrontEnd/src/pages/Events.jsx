import React from 'react'

const SIMPLE_EVENTS = [
  {id: 1, title: 'Cloud Computing Summit',  date: "April 15, 2026", type: "Webinar", description: "Join industry leaders to discuss the future of cloud computing and its impact on businesses."},
  {id: 2, title: 'AI in Healthcare Conference', date: "May 20, 2026", type: "Conference", description: "Explore the latest advancements in artificial intelligence and its applications in healthcare."},
  {id: 3, title: 'Cybersecurity Workshop', date: "June 10, 2026", type: "Workshop", description: "Learn about the latest cybersecurity threats and how to protect your organization from cyber attacks."}
]

const Events = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className='text-3xl font-bold mb-10 text-center'>Featured Events</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {SIMPLE_EVENTS.map(event =>(
          <div key={event.id} className='bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-orange-200 transition-all hover:scale-105 transition-all'>
            <span className='text-orange-500 text-sm font-bold uppercase tracking-widest'>{event.type}</span>
            <h3 className='text-2xl font-bold mt-2 mb-4'>{event.title}</h3>
            <p className='font-semibol mb-6'>{event.description}</p>
            <p className='font-medium tracking-wider mb-3'>{event.date}</p>
            <button className='w-1/2 border-2 bg-orange-500 py-3 px-3 rounded-lg text-white hover:bg-red-500 trasnsition-all'>View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events