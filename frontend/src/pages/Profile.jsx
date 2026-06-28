import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const navigate = useNavigate();
  const initials = user?.name
    ? user.name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()
    : 'G';

  return (
    <div className="profile-wrap">
      <section className="profile-card">
        <div className="avatar">{initials}</div>
        <div>
          <h2>My Profile</h2>
          <p className="muted">Your current Blackcube account details.</p>
        </div>

        <div className="profile-list">
          <div className="profile-row">
            <span>Name</span>
            <strong>{user?.name || 'Guest'}</strong>
          </div>
          <div className="profile-row">
            <span>Email</span>
            <strong>{user?.email || 'Not logged in'}</strong>
          </div>
        </div>

        <button onClick={() => { localStorage.clear(); navigate('/login'); }} className="btn btn--danger">
          Logout
        </button>
      </section>
    </div>
  );
};

export default Profile;
