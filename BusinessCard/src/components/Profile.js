export default function Profile() {
  return (
    <div className="profile-container">
      <img src="./static/profile.png" width="100px" />
      <h2>Sherlock Holmes</h2>
      <h4>Professional Detective</h4>
      <a href="#">sherlock.holmes.uk</a>
      <div className="actions">
        <button className="btn email">
          <i class="fa-regular fa-envelope"></i>Email
        </button>
        <button className="btn linkedin">
          <i class="fa-brands fa-linkedin-in"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
