import React from "react";
import Row from "./Row";

function Preview({bookingData}) {
  return (
    <div>
      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {/* <!-- Row 1 --> */}
            {bookingData.map((row, index)=> <Row key={index} row={row}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Preview;
