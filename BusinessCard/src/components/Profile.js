export default function Profile() {
  return (
    <div className="profile-container">
      <img className="profile-image" src="./static/profile.png" width="100px" />
      <div className="profile-details">
        <h2 className="profile-name">
          <strong>Sherlock Holmes</strong>
        </h2>
        <h4 className="profile-profession">Professional Detective</h4>
        <div className="profile-site">
          <a href="#">sherlock.holmes.uk</a>
        </div>
        <div className="actions">
          <button className="btn email">
            <i class="fa-regular fa-envelope"></i>Email
          </button>
          <button className="btn linkedin">
            <i class="fa-brands fa-linkedin-in"></i>LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
