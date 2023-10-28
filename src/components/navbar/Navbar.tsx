import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>AadhilAdminPanel</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span>Aadhil</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
