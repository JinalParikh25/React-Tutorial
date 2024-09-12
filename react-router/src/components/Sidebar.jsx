// import { useContext } from "react";
// import { PostContext } from "../store/PostStore";

const Sidebar = (prop) => {

    let {selectedTab,handleOnSelectTab} =  prop;


    return (
        <>
            <div    className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" 
                    style={{width:"280px",minHeight:"550px"}}>
                <a  href="/" 
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Sidebar</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a  href="#" 
                        onClick={handleOnSelectTab} 
                        className={`nav-link text-white ${selectedTab === "Home" && "active" }`}  aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                        Home
                    </a>
                </li>
                <li>
                    <a  href="#" 
                        onClick={handleOnSelectTab} 
                        className={`nav-link text-white
                                     ${selectedTab === "Create Post" &&  "active" }`} >
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                    Create Post
                    </a>
                </li>
                
                </ul>
                
            </div>
        </>
    )
}

export default Sidebar;