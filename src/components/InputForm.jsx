import React from 'react'

function InputForm({formData, setFormData, bookingData, setBookingData}) {
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookingData([...bookingData, {...formData}]);
    setFormData({
      from: '',
      to: '',
      date: '',
      guests: '',
      ticketclassName: '',
    });
  }
  return (
    <div>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform">
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <image src="./images/icons/Frame.svg" alt="" />
              <select value={formData.from} onChange={handleChange} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                <option  hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <image src="./images/icons/Frame.svg" alt="" />
              <select value={formData.to} onChange={handleChange} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                <option  hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input onChange={handleChange} value={formData.date} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <image src="./images/icons/Vector (1).svg" alt="" />
              <select onChange={handleChange} value={formData.guests} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <image src="./images/icons/Vector (3).svg" alt="" />
              <select onChange={handleChange} value={formData.ticketclassName} className="outline-none px-2 py-2 w-full" name="ticketclassName" id="lws-ticketclass" required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button onClick={handleSubmit} className="addCity" type="submit" id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default InputForm;