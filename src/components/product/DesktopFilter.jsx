/* eslint-disable react/prop-types */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const FilterSection = ({ title, children }) => (
  <Disclosure
    as="div"
    className="border-b border-gray-200 dark:border-gray-700 py-6"
    defaultOpen
  >
    <h3 className="-my-3 flow-root">
      <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
        <span className="font-medium text-gray-900 dark:text-gray-300">
          {title}
        </span>
        <span className="ml-6 flex items-center">
          <PlusIcon
            aria-hidden="true"
            className="h-5 w-5 group-data-[open]:hidden transition-transform transform group-open:rotate-180"
          />
          <MinusIcon
            aria-hidden="true"
            className="h-5 w-5 group-not-open:hidden transition-transform transform group-open:rotate-180"
          />
        </span>
      </DisclosureButton>
    </h3>
    <DisclosurePanel className="pt-6">{children}</DisclosurePanel>
  </Disclosure>
);

const DesktopFilter = ({ handleOnCategoryFilter, handleSubCatFilter }) => {
  const { categories, brands, materials } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts, activeFilters } = useSelector(
    (state) => state.products
  );

  return (
    <div className="hidden lg:block space-y-6">
      {/* Categories Filter */}
      <FilterSection title="Categories">
        <div className="space-y-4">
          {categories?.map((item) => (
            <div
              key={item._id}
              className={`flex items-center ${
                filteredProducts?.length
                  ? filteredProducts?.find(
                      (product) => product?.categoryId === item._id
                    )
                    ? "flex"
                    : "hidden"
                  : "flex"
              }`}
            >
              <input
                defaultValue={item?._id}
                checked={
                  item?.checked ||
                  filteredProducts?.find(
                    (prod) => prod?.categoryId === item?._id
                  )
                    ? true
                    : false
                }
                id={item?._id}
                name={item?.slug}
                type="checkbox"
                onChange={handleOnCategoryFilter}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
              />
              <label
                htmlFor={item?._id}
                className="ml-3 text-sm text-gray-600 dark:text-gray-400"
              >
                {item?.title}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Brand Filter */}
      {filteredProducts?.length > 0 && (
        <FilterSection title="Brand">
          <div className="space-y-4">
            {brands
              ?.filter((brand) => {
                const filteredCat = categories?.find(
                  (cat) => cat?._id === filteredProducts[0]?.categoryId
                );
                return filteredCat?.brand?.includes(brand?._id);
              })
              ?.map((item) => (
                <div key={item._id} className="flex items-center">
                  <input
                    defaultValue={item?._id}
                    checked={
                      item?.checked ||
                      activeFilters["brandId"]?.some(
                        (value) => value === item?._id
                      )
                    }
                    id={item?._id}
                    name="brandId"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                    onChange={handleSubCatFilter}
                  />
                  <label
                    htmlFor={item?._id}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {item?.name}
                  </label>
                </div>
              ))}
          </div>
        </FilterSection>
      )}

      {/* Material Filter */}
      {filteredProducts?.length > 0 && (
        <FilterSection title="Material Type">
          <div className="space-y-4">
            {materials
              ?.filter((material) => {
                const filteredCat = categories?.find(
                  (cat) => cat?._id === filteredProducts[0]?.categoryId
                );
                return filteredCat?.material?.includes(material?._id);
              })
              ?.map((item) => (
                <div key={item._id} className="flex items-center">
                  <input
                    defaultValue={item?._id}
                    checked={
                      item?.checked ||
                      activeFilters["materialId"]?.some(
                        (value) => value === item?._id
                      )
                    }
                    id={item?._id}
                    name="materialId"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                    onChange={handleSubCatFilter}
                  />
                  <label
                    htmlFor={item?._id}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {item?.name}
                  </label>
                </div>
              ))}
          </div>
        </FilterSection>
      )}

      {/* Gender Filter */}
      {filteredProducts?.length > 0 && (
        <FilterSection title="Gender">
          <div className="space-y-2">
            {["men", "women", "unisex"].map((gender) => (
              <div key={gender} className="flex items-center">
                <input
                  name="gender"
                  type="checkbox"
                  value={gender}
                  checked={activeFilters?.gender?.includes(gender)}
                  onChange={handleSubCatFilter}
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                />
                <label
                  htmlFor={gender}
                  className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                >
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>
      )}
    </div>
  );
};

export default DesktopFilter;
