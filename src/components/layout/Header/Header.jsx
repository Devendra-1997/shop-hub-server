import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUser } from "../../../entities/user/UserSlice";
import shop_logo from "../../../assets/images/shophub.png";

const customClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(setUser({}));
  };

  const itemCount = 2; // Example item count

  const navigation = [
    { name: "Browse", to: "/products", current: false },
    { name: "About", to: "/about", current: false },
    { name: "Contact", to: "/contact", current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-purple-800 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-[80px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <Link
              to="/"
              className="flex items-center gap-1 text-gray-300 font-semibold text-xl"
            >
              <img alt="Logo" src={shop_logo} className="h-[30px] w-[30px]" />
              <h1>LuxeDrive</h1>
            </Link>

            {/* Navigation Links */}
            <div className="hidden sm:block sm:flex-1 sm:justify-center">
              <div className="flex ps-2 lg:space-x-4 justify-center">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.to;
                  return (
                    <Link key={item.name} to={item.to}>
                      <DisclosureButton
                        aria-current={isCurrent ? "page" : undefined}
                        className={customClassNames(
                          isCurrent
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                      >
                        {item.name}
                      </DisclosureButton>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Icons for Cart and Profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/cart"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            >
              <span className="sr-only">View Cart</span>
              <ShoppingBagIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>

            {user?.email ? (
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://via.placeholder.com/150"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition">
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <div
                      onClick={handleOnLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Login</span>
                  <UserCircleIcon className="h-6 w-6" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to}>
              <DisclosureButton
                aria-current={item.current ? "page" : undefined}
                className={customClassNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
