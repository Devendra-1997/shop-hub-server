import CategoryCard from "../../components/custom/CategoryCard";
import { CustomCard } from "../../components/custom/CustomCard";
import CustomCarousel from "./../../components/custom/CustomCarousel";
import { Link } from "react-router-dom";
import accessories from "../../assets/images/tesla.png";
import analog_watch from "../../assets/images/rolls.png";
import carousel_1 from "../../assets/images/audi.avif";
import carousel_2 from "../../assets/images/tesla.png";
import carousel_3 from "../../assets/images/rolls.png";
import mens from "../../assets/images/tesla.png";
import pocket_watch from "../../assets/images/audi.avif";
import { useSelector } from "react-redux";
import womens from "../../assets/images/rolls.png";
import wrist_watch from "../../assets/images/audi.avif";

const images = [
  wrist_watch,
  carousel_1,
  analog_watch,
  carousel_2,
  pocket_watch,
  carousel_3,
];

const Home = () => {
  const { categories } = useSelector((state) => state.categories);
  const watch_Id = categories?.find((item) => item?.slug === "watches")?._id;
  const accessories_Id = categories?.find(
    (item) => item?.slug === "accessories"
  )?._id;

  const { reviews } = useSelector((state) => state.reviews);
  const { products } = useSelector((state) => state.products);

  const topProducts = reviews
    ?.filter((review) => review?.ratings >= 4)
    ?.map((item) => item?.productId);

  const uniqueProductIds = new Set(topProducts);

  const popularProducts = products
    ?.filter(
      (item) =>
        uniqueProductIds?.has(item?._id) && item?.categoryId === watch_Id
    )
    ?.slice(0, 10);

  const mensProducts = products
    ?.filter((item) => item?.gender === "men" && item?.categoryId === watch_Id)
    ?.slice(0, 10);

  const womensProducts = products
    ?.filter(
      (item) => item?.gender === "women" && item?.categoryId === watch_Id
    )
    ?.slice(0, 10);

  const homeCatInput = [
    {
      title: "Men",
      to: `/products?category=${watch_Id}&gender=men`,
      image: mens,
    },
    {
      title: "Women",
      to: `/products?category=${watch_Id}&gender=women`,
      image: womens,
    },
    {
      title: "Accessories",
      to: `/products?category=${accessories_Id}`,
      image: accessories,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <CustomCarousel images={images} />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Category Section */}
        <section className="mt-12">
          <h2 className="text-center text-3xl font-bold tracking-wider text-gray-800">
            Explore by Category
          </h2>
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeCatInput?.map((item) => (
                <div
                  key={item?.title}
                  className="transition-transform hover:scale-105"
                >
                  <CategoryCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="mt-20 mb-8">
          <h2 className="text-3xl font-semibold text-center tracking-wide text-gray-800">
            Most Popular
          </h2>
          <div className="flex overflow-x-scroll no-scrollbar gap-4 px-4 py-8">
            {popularProducts.map((product) => (
              <div
                key={product?._id}
                className="flex-shrink-0 transition-transform hover:scale-105"
              >
                <CustomCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals and Favorites - Women */}
        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            New Arrivals & Favorites
          </h2>
          <Link to={`/products?category=${watch_Id}&gender=women`}>
            <h3 className="text-xl text-center mt-4 font-bold text-purple-700 hover:underline">
              Women’s Collection
            </h3>
          </Link>
          <div className="flex overflow-x-scroll no-scrollbar gap-4 px-4 py-6">
            {womensProducts.map((product) => (
              <div
                key={product?._id}
                className="flex-shrink-0 transition-transform hover:scale-105"
              >
                <CustomCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals and Favorites - Men */}
        <section className="mt-10 mb-8">
          <Link to={`/products?category=${watch_Id}&gender=men`}>
            <h3 className="text-xl text-center mt-4 font-bold text-purple-700 hover:underline">
              Men’s Collection
            </h3>
          </Link>
          <div className="flex overflow-x-scroll no-scrollbar gap-4 px-4 py-6">
            {mensProducts.map((product) => (
              <div
                key={product?._id}
                className="flex-shrink-0 transition-transform hover:scale-105"
              >
                <CustomCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
