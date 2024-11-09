/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const FilterItem = ({ id, label, checked, onChange }) => (
  <div className="flex items-center">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
    />
    <label
      htmlFor={id}
      className="ml-3 text-sm text-gray-600 dark:text-gray-400"
    >
      {label}
    </label>
  </div>
);

const MobileFilter = ({
  mobileFiltersOpen = false,
  setMobileFiltersOpen,
  handleOnCategoryFilter,
  handleSubCatFilter,
}) => {
  const { categories, brands, materials } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts, activeFilters } = useSelector(
    (state) => state.products
  );

  return (
    <Dialog
      open={mobileFiltersOpen}
      onClose={() => setMobileFiltersOpen(false)}
      className="relative z-50 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="px-4 relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-900 py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-900 dark:text-gray-100">
              Filters
            </h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Categories Section */}
          <Disclosure
            as="div"
            className="border-b border-gray-200 dark:border-gray-700 py-6"
            defaultOpen
          >
            <h3 className="-my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-300">
                  Categories
                </span>
                <span className="ml-6 flex items-center">
                  <PlusIcon
                    aria-hidden="true"
                    className="h-5 w-5 group-data-[open]:hidden"
                  />
                  <MinusIcon
                    aria-hidden="true"
                    className="h-5 w-5 group-data-[closed]:hidden"
                  />
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel className="pt-6">
              <div className="space-y-4">
                {categories?.map((item) => (
                  <FilterItem
                    key={item._id}
                    id={item._id}
                    label={item.title}
                    checked={filteredProducts?.find(
                      (prod) => prod?.categoryId === item._id
                    )}
                    onChange={handleOnCategoryFilter}
                  />
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>

          {/* Brand Section */}
          {filteredProducts?.length > 0 && (
            <Disclosure
              as="div"
              className="border-b border-gray-200 dark:border-gray-700 py-6"
              defaultOpen
            >
              <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-gray-300">
                    Brand
                  </span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon
                      aria-hidden="true"
                      className="h-5 w-5 group-data-[open]:hidden"
                    />
                    <MinusIcon
                      aria-hidden="true"
                      className="h-5 w-5 group-data-[closed]:hidden"
                    />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                <div className="space-y-4">
                  {brands
                    ?.filter((brand) =>
                      categories
                        ?.find(
                          (cat) => cat._id === filteredProducts[0]?.categoryId
                        )
                        ?.brand?.includes(brand._id)
                    )
                    ?.map((item) => (
                      <FilterItem
                        key={item._id}
                        id={item._id}
                        label={item.name}
                        checked={activeFilters["brandId"]?.includes(item._id)}
                        onChange={handleSubCatFilter}
                      />
                    ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
          )}

          {/* Material Section */}
          <Disclosure
            as="div"
            className="border-b border-gray-200 dark:border-gray-700 py-6"
            defaultOpen
          >
            <h3 className="-my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-300">
                  Material Type
                </span>
                <span className="ml-6 flex items-center">
                  <PlusIcon
                    aria-hidden="true"
                    className="h-5 w-5 group-data-[open]:hidden"
                  />
                  <MinusIcon
                    aria-hidden="true"
                    className="h-5 w-5 group-data-[closed]:hidden"
                  />
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel className="pt-6">
              <div className="space-y-4">
                {materials
                  ?.filter((material) =>
                    categories
                      ?.find(
                        (cat) => cat._id === filteredProducts[0]?.categoryId
                      )
                      ?.material?.includes(material._id)
                  )
                  ?.map((item) => (
                    <FilterItem
                      key={item._id}
                      id={item._id}
                      label={item.name}
                      checked={activeFilters["materialId"]?.includes(item._id)}
                      onChange={handleSubCatFilter}
                    />
                  ))}
              </div>
            </DisclosurePanel>
          </Disclosure>

          {/* Gender Section */}
          <Disclosure as="div" className="pt-6" defaultOpen>
            <h3 className="-my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-300">
                  Gender
                </span>
                <span className="ml-6 flex items-center">
                  <PlusIcon
                    aria-hidden="true"
                    className="h-5 w-5 group-data-[open]:hidden"
                  />
                  <MinusIcon
                    aria-hidden="true"
                    className="h-5 w-5 group-data-[closed]:hidden"
                  />
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel className="pt-6">
              <div className="space-y-2">
                {["men", "women", "unisex"].map((gender) => (
                  <FilterItem
                    key={gender}
                    id={gender}
                    label={gender.charAt(0).toUpperCase() + gender.slice(1)}
                    checked={activeFilters.gender?.includes(gender)}
                    onChange={handleSubCatFilter}
                  />
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileFilter;
