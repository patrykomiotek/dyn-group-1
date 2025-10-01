import { Link } from "react-router-dom";
import { Route } from "../../routes";

export function Menu() {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <Link to={Route.HOME.path} className="text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to={Route.REGISTRATION.path} className="text-blue-600">
            Registration
          </Link>
        </li>
      </ul>
    </nav>
  );
}
