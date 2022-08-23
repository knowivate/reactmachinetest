import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                <Link to="/register">
                  <h1 className="hover:underline title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Register Account</h1>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                <Link to="/products">
                  <h1 className="hover:underline title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">View Products</h1>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                <Link to="/clock">
                  <h1 className="hover:underline title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">View Clock</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
