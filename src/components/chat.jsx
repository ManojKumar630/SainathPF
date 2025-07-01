import React, { useState, useEffect } from 'react';

const ChatForm = () => {
  const [form, setForm] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [open, setOpen] = useState(false); // toggles form visibility

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const response = await fetch('https://sainathpfbackend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', country: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setOpen(false); // Auto-close after 6 seconds
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // 💬 Floating Button (Minimized state)
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        💬 Contact Me
      </button>
    );
  }

  // 📬 Expanded Chat Form
  return (
    <div className="fixed bottom-4 right-4 backdrop-blur-md bg-purple-300/90 dark:bg-gray-900 shadow-lg rounded-lg w-[22rem] md:w-[26rem] p-4 z-50 text-black dark:text-white resize overflow-auto min-h-[28rem]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Contact Me</h2>
        <button
          onClick={() => setOpen(false)}
          className="text-gray-500 hover:text-black dark:hover:text-white">
          ▼
        </button>
      </div>

      {status === 'success' ? (
        <div className="p-4 bg-green-100 text-green-800 rounded text-center">
          ✅ Message sent! Thank you.
        </div>
      ) : status === 'error' ? (
        <div className="p-4 bg-red-100 text-red-800 rounded text-center">
          ❌ Failed to send message. Try again.
        </div>
      ) : (
        <>
          {['name', 'country', 'phone', 'email'].map((field) => (
            <input
              key={field}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              className="w-full border p-2 mb-2 rounded"
            />
          ))}

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded h-32 resize-none"
          />

          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            className={`w-full py-2 rounded text-white ${
              status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button> 
        </>
        
      )}
    </div>
  );
};

export default ChatForm;
