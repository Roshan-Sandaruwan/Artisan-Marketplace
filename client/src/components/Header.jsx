const Header = () => {
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
          <p className="text-xs font-bold uppercase text-gray-700">
            Marketplace
          </p>
          <p className="text-xs text-gray-500">Best Handmade Products</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center">
        <h1 className="text-lg font-semibold text-gray-800">
          <span className="font-light">Artician</span> Marketplace
        </h1>
        <p className="text-xs text-gray-500">Best Handmade Products</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
          SIGN UP
        </button>
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
          LOG IN
        </button>
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
          ABOUT US
        </button>
      </div>
    </header>
  );
};

export default Header;
