import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="bg #cbd5e1 min-h-screen">
        {/* Hero Section */}
        <section className="bg-slate-200 shadow py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <span></span>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md py-2 px-4 w-64"
              />
              <button className="text-gray-500">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <select className="border py-2 px-3 rounded-md bg-white">
                <option>Categories</option>
              </select>
              <select className="border py-2 px-3 rounded-md bg-white">
                <option>Articians</option>
              </select>
              <select className="border py-2 px-3 rounded-md bg-white">
                <option>Regions</option>
              </select>
            </div>
            <button className="text-gray-500">
              Other filter <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </section>

        {/* Artisan Item Cards */}
        <section className="container mx-auto px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            All Artician
            <span className="block text-sm text-gray-500">
              5 Artician listed
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Single Item Card 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Artisan Image"
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Artician Shop name
                </h3>
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-xs text-gray-400 mt-2">Location</p>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                  View items
                </button>
              </div>
            </div>

            {/* Single Item Card  2*/}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Artisan Image"
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Artician Shop Name
                </h3>
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-xs text-gray-400 mt-2">Location</p>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                  View items
                </button>
              </div>
            </div>

            {/* Single Item Card  3*/}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Artisan Image"
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Artician Shop Name
                </h3>
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-xs text-gray-400 mt-2">Location</p>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                  View items
                </button>
              </div>
            </div>

            {/* Single Item Card  4*/}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Artisan Image"
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Artician Shop Name
                </h3>
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-xs text-gray-400 mt-2">Location</p>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                  View items
                </button>
              </div>
            </div>

            {/* Single Item Card  5*/}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Artisan Image"
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Artician Shop Name
                </h3>
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-xs text-gray-400 mt-2">Location</p>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                  View items
                </button>
              </div>
            </div>

            {/* Add more artisan cards here */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
