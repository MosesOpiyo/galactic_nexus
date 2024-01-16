

const NavBar = () => {
    
    const fontStyle = {
        color:'white',
        fontWeight:'400',
        fontFamily:'Audiowide',
        textTransform: 'uppercase',
        fontSize:'12px',
        padding:'10px'
    }
    
    return (
        <nav style={{padding: '5px',position:'fixed',top:'0',width:'90%'}} className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" style={fontStyle} href="#"><span style={{ fontFamily: 'Audiowide',fontSize:'35px',fontWeight:'bold' }}>Galatic</span> <br /><span style={{ fontFamily: 'Audiowide',paddingLeft:'55px',fontSize:'15px' }}>Nexus</span></a>
        <button className="navbar-toggler" style={{ border:'2px solid rgba(0, 255, 255)' }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span style={{ color:'rgba(0, 255, 255)' }} className="navbar-toggler-icon">
          </span>
        </button>
      
        <div className="collapse navbar-collapse pb-2" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" style={fontStyle} href="#">Exploration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" style={fontStyle} href="#">Vehicles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" style={fontStyle} href="#">Sections</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={fontStyle} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Community
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" style={fontStyle} href="#">Action</a>
                <a className="dropdown-item" style={fontStyle} href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" style={fontStyle} href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={fontStyle} href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={fontStyle} href="#">Enroll</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default NavBar