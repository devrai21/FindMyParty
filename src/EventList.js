import React from 'react';

function EventList() {
  const events = [
    { id: 1, name: 'Concert in the Park' },
    { id: 2, name: 'Food Truck Fiesta' }
    // Add more events as needed
  ];

  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>{event.name}</li>
      ))}
    </ul>
  );
}

export default EventList;
