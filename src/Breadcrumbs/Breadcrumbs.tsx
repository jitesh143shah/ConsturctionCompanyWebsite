import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-100 py-2 px-6 rounded-b-md mb-6">
      <ul className="flex gap-2 text-gray-700">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={index}>
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="font-bold">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              ) : (
                <Link to={routeTo}>
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
