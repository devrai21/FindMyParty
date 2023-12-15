import React from 'react';
import './App.css'; // Import the CSS file
import park from './images/park.jpg';
import food from './images/food.jpg';
import indian from './images/indian.jpg';
import party from './images/party.jpg';

function App() {
  const user = {
    name: 'Dev Raiyani',
    email: 'devraiyani@gmail.com',
    location: 'Los Angeles',
    notifications: true,
  };

  const toggleNotifications = () => {
    // Toggle the notifications property in user state
    // You can add the logic here to update user notifications
  };

  const events = [
    {
      id: 1,
      name: 'Concert in the Park',
      category: 'Music',
      date: '2024/07/20',
      imageUrl: park,
    },
    {
      id: 2,
      name: 'Food Truck Fiesta',
      category: 'Food',
      date: '2024/07/22',
      imageUrl: food,
    },
    {
      id: 3,
      name: 'CS Major Party',
      category: 'Tech',
      date: '2024/09/22',
      imageUrl: party,
    },
    {
      id: 4,
      name: 'Indian Food Festival',
      category: 'Food',
      date: '2024/20/22',
      imageUrl: indian,
    },
    // ... more events with image URLs
  ];

  const handleRSVP = (eventId) => {
    console.log(`RSVP to event with ID: ${eventId}`);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header-text">FindMyParty.</div>
      <div className="header">
        <div className="profile">
          <h2>Welcome, {user.name}</h2>
          <button onClick={toggleNotifications}>
            {user.notifications ? 'Turn Notifications Off' : 'Turn Notifications On'}
          </button>
        </div>
        <div>
          <p>Location: {user.location}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <hr />
      <div>
        <h2>Upcoming Events</h2>
        <div className="event-scroll-container">
          <div className="event-scroll">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <img src={event.imageUrl} alt={event.name} className="event-image" />
                <div className="event-details">
                  <h3>{event.name}</h3>
                  <p>Category: {event.category}</p>
                  <p>Date: {event.date}</p>
                  <button onClick={() => handleRSVP(event.id)}>RSVP</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="settings">

  <h2>Settings</h2>
  <div className="setting-option">
    <label>Notification Preferences:</label>
    <select>
      <option>Receive all notifications</option>
      <option>Only important notifications</option>
      <option>Turn off all notifications</option>
    </select>
  </div>
  <div className="setting-option">
    <label>Privacy Settings:</label>
    <select>
      <option>Public</option>
      <option>Friends only</option>
      <option>Private</option>
    </select>
  </div>
  <div className="setting-option">
    <label>Change Password:</label>
    <button>Change Password</button>
  </div>
  <div className="setting-option">
    <label>Delete Account:</label>
    <button>Delete Account</button>
  </div>
</div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-text">© 2023 Your Website Name</div>
      </footer>
    </div>
  );
}

export default App;
