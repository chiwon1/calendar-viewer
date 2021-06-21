import React from "react";

function Daily() {
  return (
    <table>
      <thead>
        <tr>
          <td>Time</td>
          <td>Event</td>
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(24).keys()).map((hour) => (
          <>
            <tr>
              <td>{`${hour}:00 - ${hour}:30`}</td>
              <td>Event 1</td>
            </tr>
            <tr>
              <td>{`${hour}:30 - ${hour + 1}:00`}</td>
              <td>Event 2</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default Daily;
