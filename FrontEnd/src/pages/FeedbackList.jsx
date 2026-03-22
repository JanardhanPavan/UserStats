import axios from 'axios';
import { useEffect, useState } from 'react'

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/feedback').then(res => setFeedbacks(res.data));
  })
  return (
    <div className='container mx-auto py-16 px-6'>
      <h2 className='text-3xl font-bold mb-10'>What Attendees Are Saying..</h2>
        <div className='columns-1 md:columns-2 lg:columns-3 gap-6'>
          {feedbacks.map(f => (
            <div key={f._id} className='break-inside-avoid mb-6 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold uppercase'>
                  {f.userName[0]}
                </div>
                <div>
                  <h4 className='font-bold text-slate-800'>{f.userName}</h4>
                  <p className='text-xs text-slate-400'>{f.event}</p>
                </div>
              </div>
              <p className='text-slate-600 italic'>"{f.comments}"</p>
              <div className='mt-4 text-orange-400 font-bold text-sm'>Rating: {f.rating}/5</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FeedbackList