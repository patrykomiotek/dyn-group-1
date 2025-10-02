import { Link } from "react-router-dom";
import { Route } from "../../../routes";

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
        <li>
          <Link to={Route.PRODUCTS_LIST.path} className="text-blue-600">
            Products
          </Link>
        </li>
        <li>
          <Link to={Route.CREATE_PRODUCT.path} className="text-blue-600">
            Create product
          </Link>
        </li>
      </ul>
    </nav>
  );
}
