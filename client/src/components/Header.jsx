import { useNavigate } from "react-router-dom";

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
    <header className="w-full bg-white shadow-md px-4 py-2 flex items-center justify-between md:px-8">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
          <img
            src="/assets/Articain.png"
            alt="logo"
            className="h-[20px] w-[20px] object-cover rounded"
          />
        </div>
        <div>
          <p
            onClick={handleHomePageClick}
            className="text-xs font-bold uppercase text-gray-700"
          >
            Artician Marketplace
          </p>
          <p className="text-xs text-gray-500">Best Handmade Products</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center">
        <h1 className="text-lg font-semibold text-gray-800">
          <span className="font-bold">Artify</span>
          
        </h1>
        <p className="text-xs text-gray-500">Best Handmade Products</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleSignupClick}
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          SIGN UP
        </button>
        <button
          onClick={handleLoginClick}
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          LOG IN
        </button>
        <button
          onClick={handleAboutUsClick}
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          ABOUT US
        </button>
      </div>
    </header>
  );
};

export default Header;
