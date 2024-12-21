import Footer from "../components/Footer";
import Header from "../components/Header";
import NewLogoImage from "../assets/NewArtisan.png";

const AboutusPage = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              About Artisan Marketplace
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Connecting Artisan with Premium Customers
            </p>
          </div>

          {/* Section: Who We Are */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center md:space-x-12">
            <div className="md:w-1/2">
              <img
                src={NewLogoImage} // Replace with image URL
                alt="Artisan Marketplace"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="rounded-lg bg-gray-700 mt-8 md:mt-0 md:w-1/2 p-6 shadow-md hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-50">
                Who We Are
              </h2>
              <p className="mt-4 text-gray-100 leading-relaxed">
                "Artisan Marketplace" is a platform designed to bring talented
                local Artisan and creators together with premium customers. We
                showcase unique, high-quality handmade goods ranging from art,
                decor, and clothing to specialty items that you won’t find
                anywhere else.
              </p>
              <p className="mt-4 text-gray-100 leading-relaxed">
                Our mission is to create a thriving marketplace for artisan to
                sell their products, connect with customers, and grow their
                small businesses.
              </p>
            </div>
          </div>

          {/* Section: What We Do */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              What We Do
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-lg bg-gray-200 p-6 shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  Support Artisan
                </h3>
                <p className="mt-2 text-gray-600">
                  We provide artisan with a platform to showcase and sell their
                  handcrafted products to a global audience.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg bg-gray-200 p-6 shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  Promote Local Talent
                </h3>
                <p className="mt-2 text-gray-600">
                  Artisan Marketplace is committed to promoting local talent and
                  helping small businesses thrive.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg bg-gray-200 p-6 shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  Unique Shopping Experience
                </h3>
                <p className="mt-2 text-gray-600">
                  Customers can explore unique, high-quality handmade items from
                  various categories all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Our Values */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Our Values
            </h2>
            <div className="mt-8 flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/3 text-center">
                <h3 className="text-lg font-semibold text-gray-700">Quality</h3>
                <p className="mt-2 text-gray-600">
                  We ensure every product meets high standards of quality.
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Authenticity
                </h3>
                <p className="mt-2 text-gray-600">
                  Supporting real artisans and original handcrafted goods.
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Community
                </h3>
                <p className="mt-2 text-gray-600">
                  Building a community where artisans and customers thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutusPage;
