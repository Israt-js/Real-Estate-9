import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-4">It looks like the page you're looking for doesn't exist.</p>
        <p className="text-sm text-gray-500 mb-6">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
          Go Home
        </Link>
      </div>
    </div>
  );
}
