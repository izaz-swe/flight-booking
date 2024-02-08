import Header from "./components/Header"
import InputForm from "./components/InputForm"
import Preview from "./components/Preview"
import { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    guests: '',
    ticketclassName: '',
  });
  const [bookingData, setBookingData] = useState([]);
  return (
    <div className="App">
      
      <Header/>
      <InputForm formData={formData} setFormData={setFormData} bookingData={bookingData} setBookingData={setBookingData} />
      <Preview bookingData={bookingData}/>
    </div>
  )
}

export default App
