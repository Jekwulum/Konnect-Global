import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-custom-green">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <NavLink to="/"
            className="rounded-md bg-custom-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-green/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-green">Go
            back home
          </NavLink>
          <a href="mailto:info@konnectglobal.com" className="text-sm font-semibold text-gray-900">Contact support <span
            aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
};

export default Error404;
