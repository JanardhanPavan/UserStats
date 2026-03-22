import axios from 'axios';
import { useState } from 'react'

const FeedbackForm = () => {
  const [form, setForm] = useState({userName: '', event: '', rating: 5, comments: ''});
  const [msg, setmsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', form);
      setmsg('Feedback submitted successfully!');
      setForm({userName: '', event: '', rating: 5, comments: ''});
    } catch (error) {
      setmsg('Error submitting feedback. Please try again later.');
    }
  }

  return (
    <div className='max-w-2xl mx-auto py-16 px-6'>
      <div className='bg-white p-10 shadow-2xl border border-slate-50 rounded-3xl'>
        <h2 className='text-3xl font-bold mb-2'>Event Feedback</h2>
        <p className='text-slate-500 mb-8'>Tell us your valuable feedback about the event!</p>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <input required className='w-full p-4 bg-slate-50 rounded-xl focus:ring-2 border-none focus:ring-orange-400' type="text" placeholder='Full Name' value={form.userName} onChange={e => setForm({...form, userName: e.target.value})}/>
          <select required className='w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-orange-400' value={form.event} onChange={e => setForm({...form, event: e.target.value})}>
            <option value="" disabled>Select Event</option>
            <option value="Cloud Summit">Cloud Summit</option>
            <option value="AI Lab">AI Lab</option>
            <option value="Other">Other</option>
          </select>

          <textarea className='w-full text-orange-600 py-4 px-4 bg-slate-50 border-none rounded-xl font-semibold focus:ring-2 focus:ring-orange-600 transition shadow-lg' placeholder="Enter your comments here..." value={form.comments} onChange={e => setForm({...form, comments: e.target.value})}></textarea>

          <button className='w-full bg-orange-400 py-4 border-none rounded-xl text-white font-bold tracking-wider focus:ring-orange-400'>Send Feedback</button>
        </form>
        {msg && <p className='mt-4 text-center font-bold text-emerald-600'>{msg}</p>}
      </div>
    </div>
  )
}

export default FeedbackForm