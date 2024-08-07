const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        📌 Taskman
                    </a>
                    <div className="nav-buttons d-fles">
                        <button className="btn btn-outline-primary">Sign In</button>
                        <button className="btn btn-outline-dark">Register</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;