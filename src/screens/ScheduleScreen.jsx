const ScheduleScreen = () => {
  return (
    <main className='mt-5 mb-5' >

    <div className="container py-5">
      <h2 className="mb-4">Conference Schedule</h2>
      <table className="table table-bordered table-glass">
        <thead>
          <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:00 AM</td>
            <td>Opening Ceremony</td>
            <td>Prof. A. Sharma</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>AI in Education</td>
            <td>Dr. Neha Verma</td>
          </tr>
          <tr>
            <td>12:30 PM</td>
            <td>Networking Lunch</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div></main>
  );
};

export default ScheduleScreen;
