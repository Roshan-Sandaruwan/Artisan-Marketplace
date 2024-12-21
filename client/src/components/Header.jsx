  import { useNavigate } from "react-router-dom";
  import LogoImage from "../assets/White.png";

  const Header = () => {
    const navigate = useNavigate(); // Initialize navigation function

    const handleLoginClick = () => {
      navigate("/login"); // Navigate to the login page
    };

    const handleSignupClick = () => {
      navigate("/signup"); // Navigate to the signup page
    };

    const handleAboutUsClick = () => {
      navigate("/aboutus"); // Navigate to the about us page
    };
    const handleHomePageClick = () => {
      navigate("/"); // Navigate to the about us page
    };

    return (
      <header className="w-full bg-gray-900 shadow-md px-4 py-2 flex items-center justify-between md:px-8">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <img
              src={LogoImage}
              alt="logo"
              className="h-[35px] w-[35px] object-cover rounded"
            />
          </div>
          <div>
            <p
              onClick={handleHomePageClick}
              className="text-xs font-bold uppercase text-white"
            >
              Artisan Marketplace
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <h1 className="text-lg font-semibold text-white">
            <span className="font-bold">Artify</span>
          </h1>
          <p className="text-xs text-gray-100">Best Handmade Products</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSignupClick}
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            SIGN UP
          </button>
          <button
            onClick={handleLoginClick}
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            LOG IN
          </button>
          <button
            onClick={handleAboutUsClick}
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            ABOUT US
          </button>
        </div>
      </header>
    );
  };

  export default Header;
