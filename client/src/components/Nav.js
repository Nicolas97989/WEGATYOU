import logo from '../images/cupid1.5.png'
import logo2 from '../images/cupid2.5.png'

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp}) => {

   const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
   };

    return (
        <nav>
            <div className="logo-container">
            <img 
            className="logo"
             src={minimal ? logo2 :logo}
             alt="logo"
             />
            </div>
           {!authToken && !minimal && (
           <button
             className="nav-button"
             onClick={handleClick}
             disabled={showModal}
             >
                Log in
                </button>
                )}
        </nav>
    );
};
export default Nav;