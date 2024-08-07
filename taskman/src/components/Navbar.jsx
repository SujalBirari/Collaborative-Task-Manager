const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        📌 Taskman
                    </a>
                    <button className="btn btn-outline-dark d-flex">Sign In</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;