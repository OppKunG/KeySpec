export default function App() {
  return (
    <body
      className="background"
      class=" bg-bg-color absolute h-full w-full overflow-auto"
    >
      {/* Navbar */}
      <navbar class="flex items-center justify-between flex-wrap bg-navbar-color p-0">
        <a
          href="/"
          class="flex items-center flex-shrink-0 text-white mr-6 px-5"
        >
          <svg
            className="logo"
            class="fill-current h-8 w-8 mr-5 hover:text-navbar-ptr-color"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <a
            href="/"
            class=" font-semibold text-2xl tracking-tight hover:text-navbar-ptr-color"
          >
            KeySpec
          </a>
        </a>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="mag-glass"
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class=" lg:flex-grow">
            <div className="searchBox" class=" xl:w-96 px-5 py-3">
              <div class="input-group relative flex whitespace-nowrap items-stretch w-full rounded-3xl border-1 bg-profile-color">
                <span
                  class="input-group-text flex items-center px-3 py-1 text-base font-normal text-center whitespace-nowrap rounded"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  class="form-control relative min-w-0 block w-full px-2 py-1.5 text-base text-white bg-bg-profile bg-clip-padding transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-white focus:outline-none rounded-3xl hover:bg-white"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
              </div>
            </div>
          </div>
          <div class="flex items-stretch space-x-7">
            <div>
              <a
                href="shop"
                class="inline-block text-xl w-full h-full p-6 text-white  hover:text-white hover:bg-navbar-ptr-color font-bold"
              >
                Shop
              </a>
            </div>
            <div>
              <a
                href="custom"
                class="inline-block text-xl w-full h-full p-6 text-white  hover:text-white hover:bg-navbar-ptr-color font-bold"
              >
                Custom
              </a>
            </div>
            <a
              href="community"
              class="inline-block text-xl w-full h-full p-6 text-white  hover:text-white hover:bg-navbar-ptr-color font-bold "
            >
              Community
            </a>
            <a
              href="profile"
              className="profile-icon"
              class="inline-block w-full h-full p-4 hover:bg-navbar-ptr-color"
            >
              <div class="w-12 h-12 rounded-full bg-profile1-pic bg-cover"></div>
            </a>
          </div>
        </div>
      </navbar>

      {/* หน้า Product */}
      <product>
        <div
          className="id-product"
          class="absolute w-2/3 h-80 right-60 top-1/6 mt-5 bg-bg-profile rounded-xl "
        >
          <a
            href="id-product-pic"
            className="product-pic"
            class="absolute w-96 h-52 left-5 top-1/6 m-5 bg-keyboard7-pic bg-cover rounded-xl hover:brightness-95"
          >
            {""}
          </a>
          <div
            className="product-name"
            class="text-white font-bold text-4xl text-right mt-5 mr-36"
          >
            Keyboard KeySpec
          </div>
          <div class="flex items-stretch space-x-5 ml-80 mt-5 text-xl text-sub-title-color font-semibold">
            <a
              href="id-dealer"
              className="dealer-name"
              class="ml-32 hover:text-navbar-ptr-color"
            >
              Aomsupp
            </a>
            <div>|</div>
            <a
              href="id-product_rating"
              className="product-rating"
              class="hover:text-navbar-ptr-color"
            >
              1.2k ratings
            </a>
            <div>|</div>
            <div className="product-sold">2k sold</div>
          </div>

          <div
            className="product-price"
            class="absolute w-1/2 h-12 right-5 top-1/6 mt-5 bg-bg-color rounded-xl"
          >
            <div class="text-xl font-semibold text-navbar-ptr-color ml-7 mt-2">
              500.00 Baht
            </div>
          </div>
          <div class="flex items-stretch space-x-5 ml-80 mt-20 text-xl text-sub-title-color font-semibold">
            <div className="quantity" class="ml-32 mt-1">
              Quantity
            </div>
            <div
              className="remove-quantity"
              class="w-10 h-10 bg-bg-profile brightness-125 rounded-xl hover:brightness-75"
            >
              <div class="text-white text-center text-2xl font-bold">-</div>
            </div>
            <div className="quantity-num" class="mt-1">
              1
            </div>
            <div
              className="add-quantity"
              class="w-10 h-10 bg-bg-profile brightness-125 rounded-xl hover:brightness-75"
            >
              <div class="text-white text-center text-2xl font-bold">+</div>
            </div>
          </div>

          <div
            className="add-to-cart-btn"
            class="absolute w-1/6 h-12 right-80 top-1/6 mt-5 bg-navbar-ptr-color rounded-xl hover:brightness-75"
          >
            <div class="text-center text-white text-xl font-bold mt-2">
              Add to Cart
            </div>
          </div>

          <a
            href="cart"
            className="buy-now-btn"
            class="absolute w-1/6 h-12 right-32 top-1/6 mt-5 bg-navbar-ptr-color rounded-xl hover:brightness-75"
          >
            <div class="text-center text-white text-xl font-bold mt-2">
              Buy Now
            </div>
          </a>
          <div class="mt-5 ml-32 flex items-stretch space-x-10">
            <div
              className="fav-icon"
              class="w-10 h-10 rounded-full bg-bg-profile brightness-125 hover:bg-navbar-ptr-color"
            >
              <div class=" w-7 h-7 m-1.5 bg-fav-icon bg-cover "></div>
            </div>
            <div
              className="like-icon"
              class="w-10 h-10 rounded-full bg-bg-profile brightness-125 hover:bg-navbar-ptr-color"
            >
              <div class=" w-7 h-7 m-1.5 bg-like-icon bg-cover "></div>
            </div>
            <a
              href="id-profile_share"
              className="share-icon"
              class="w-10 h-10 rounded-full bg-bg-profile brightness-125 hover:bg-navbar-ptr-color"
            >
              <div class=" w-7 h-7 m-1.5 bg-share-icon bg-cover "></div>
            </a>
          </div>
        </div>

        <div
          className="product-detail"
          class="absolute w-2/3 h-48 right-60 bottom-5 bg-bg-profile rounded-xl "
        >
          <div
            className="product_details"
            class="w-full h-20 bg-transparent 
          text-white font-bold leading-10 px-4 py-2 text-2xl"
          >
            Product details
          </div>

          <div
            class="absolute w-auto h-28 left-4 right-4 top-1/3 bg-transparent overflow-auto
          text-white text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <a
          href="cart"
          class="absolute w-16 h-16 right-32 bottom-10 bg-cart-icon bg-cover rounded-full
            hover:brightness-50 font-bold text-5xl px-3"
        >
          {" "}
        </a>
      </product>

      {/* หน้า Rating */}
      <rating>
        {/* <div
          className="id-product-rating"
          class="absolute w-2/3 h-1/3 right-60 top-1/6 mt-3 bg-bg-profile rounded-xl "
        >
          <div class="absolute w-full h-14 rounded-xl bg-bg-profile brightness-90">
            <div
              className="title"
              class="text-white text-2xl font-semibold mt-3 ml-8"
            >
              Ratings & Reviews
            </div>
          </div>

          <div
            className="rating-star"
            class="absolute w-1/2 h-1/2 right-20 top-1/5 mt-16"
          >
            <div class="flex items-stretch space-x-1 mt-1">
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="px-5">
                <div class="w-40 h-2 bg-navbar-ptr-color mt-1"></div>
              </div>
            </div>
            <div class="flex items-stretch space-x-1 mt-1">
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="px-5">
                <div class="w-40 h-2 bg-gray-500 mt-1"></div>
              </div>
            </div>{" "}
            <div class="flex items-stretch space-x-1 mt-1">
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="px-5">
                <div class="w-40 h-2 bg-gray-500 mt-1"></div>
              </div>
            </div>{" "}
            <div class="flex items-stretch space-x-1 mt-1">
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="px-5">
                <div class="w-40 h-2 bg-gray-500 mt-1"></div>
              </div>
            </div>{" "}
            <div class="flex items-stretch space-x-1 mt-1">
              <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="w-4 h-4 rounded-full bg-star-gray-icon bg-cover"></div>
              <div class="px-5">
                <div class="w-40 h-2 bg-gray-500 mt-1"></div>
              </div>
            </div>
          </div>
          <div
            className="rating-point"
            class="flex items-stretch space-x-1 mt-16 ml-8"
          >
            <div
              className="id-product-point"
              class="text-white text-5xl font-semibold"
            >
              5
            </div>
            <div
              className="id-product-point"
              class="text-sub-title-color text-4xl font-semibold mt-2"
            >
              /
            </div>
            <div
              className="id-product-point"
              class="text-sub-title-color text-4xl font-semibold mt-3"
            >
              5
            </div>
          </div>

          <div className="" class="flex items-stretch space-x-1 mt-5 ml-8">
            <div class="w-8 h-8 rounded-full bg-star-orange-icon bg-cover"></div>
            <div class="w-8 h-8 rounded-full bg-star-orange-icon bg-cover"></div>
            <div class="w-8 h-8 rounded-full bg-star-orange-icon bg-cover"></div>
            <div class="w-8 h-8 rounded-full bg-star-orange-icon bg-cover"></div>
            <div class="w-8 h-8 rounded-full bg-star-orange-icon bg-cover"></div>
          </div>
          <div
            className=""
            class="text-sub-title-color text-xl font-semibold mt-3 ml-8"
          >
            1.2k Ratings
          </div>
        </div>

        <div class="absolute w-2/3 h-1/2 bg-bg-profile rounded-xl right-60 bottom-3 mt-5">
          <div class="absolute w-full h-12 rounded-xl bg-bg-profile brightness-90">
            <div
              className="sub-title"
              class="text-white text-2xl font-semibold mt-2 ml-8"
            >
              Product Reviews
            </div>
          </div>
          <div class="absolute w-full h-1/3 rounded-xl mt-14 bg-bg-profile brightness-90">
            <div className="review_1" class="text-white mt-3 ml-8">
              <div class="flex items-stretch space-x-1 mt-1">
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              </div>
              <div className="id-review" class="text-sm mt-2">
                By Aom****
              </div>
              <div className="id-review" class="text-lg font-semibold">
                Good Product XD
              </div>
            </div>
          </div>
          <div class="absolute w-full h-1/3 rounded-xl mt-44 bg-bg-profile brightness-90">
            <div className="review_2" class="text-white mt-3 ml-8">
              <div class="flex items-stretch space-x-1 mt-1">
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
                <div class="w-4 h-4 rounded-full bg-star-orange-icon bg-cover"></div>
              </div>
              <div className="id-review" class="text-sm mt-2">
                By Aom****
              </div>
              <div className="id-review" class="text-lg font-semibold">
                Good Product XD
              </div>
            </div>
          </div>
        </div>
        <div
          className="change-page"
          class="absolute w-32 h-10 right-60 bottom-3"
        >
          <div class="flex items-stretch space-x-3 m-1 text-white">
            <a href="review_1" class="rotate-180">
              <div class="text-xl font-bold mb-1 rotate-90 hover:brightness-75">
                ^
              </div>
            </a>
            <a
              href="review_1"
              className="page_1"
              class="w-6 h-6 mt-1 bg-bg-profile brightness-125 rounded hover:brightness-75"
            >
              <div class=" text-center text-sm mt-0.5 font-bold">1</div>
            </a>
            <a
              href="review_2"
              className="page_2"
              class="w-6 h-6 mt-1 bg-bg-profile brightness-125 rounded hover:brightness-75"
            >
              <div class="text-center text-sm mt-0.5 font-bold ">2</div>
            </a>
            <a href="review_2">
              <div class="text-xl font-bold mt-1 rotate-90 hover:brightness-75">
                ^
              </div>
            </a>
          </div>
        </div>
        <a
          href="cart"
          className="cart"
          class="absolute w-16 h-16 right-32 bottom-10 bg-cart-icon bg-cover rounded-full
            hover:brightness-50 font-bold text-5xl px-3"
        >
          {" "}
        </a> */}
      </rating>

      {/* หน้า Community */}
      <community>
        {/* <div class="flex items-stretch ">
          <a
            href="id-profile"
            className="user-pic1"
            class="absolute w-40 h-40 left-60 top-1/6 mt-5 bg-bg-profile rounded-full"
          >
            <div class="absolute w-36 h-36 left-0 top-1/6 m-2 bg-profile1-pic bg-cover rounded-full hover:brightness-50"></div>
          </a>
          <div
            className="community-keyboard1"
            class="absolute w-1/2 h-40 right-60 top-1/6 mt-5 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-2 text-xl"
          >
            OppKunG
            <div class="w-full h-full bg-transparent flex items-stretch space-x-6 px-5 py-2">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-4/5 bg-keyboard1-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-4/5 bg-keyboard2-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-4/5 bg-keyboard3-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>

          <a
            href="id-profile"
            className="user-pic2"
            class="absolute w-40 h-40 left-60 top-1/3 mt-16 bg-bg-profile rounded-full"
          >
            <div class="absolute w-36 h-36 left-0 top-1/6 m-2 bg-profile2-pic bg-cover rounded-full hover:brightness-50"></div>
          </a>
          <div
            className="community-keyboard1"
            class="absolute w-1/2 h-40 right-60 top-1/3 mt-16 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-2 text-xl"
          >
            Toto
            <div class="w-full h-full bg-transparent flex items-stretch space-x-6 px-5 py-2">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-4/5 bg-keyboard4-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-4/5 bg-keyboard5-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-4/5 bg-keyboard6-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>

          <a
            href="id-profile"
            className="user-pic3"
            class="absolute w-40 h-40 left-60 bottom-10 mt-10 bg-bg-profile rounded-full"
          >
            <div class="absolute w-36 h-36 left-0 top-1/6 m-2 bg-profile3-pic bg-cover rounded-full hover:brightness-50"></div>
          </a>
          <div
            className="community-keyboard1"
            class="absolute w-1/2 h-40 right-60 bottom-10 mt-10 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-2 text-xl"
          >
            Phai
            <div class="w-full h-full bg-transparent flex items-stretch space-x-6 px-5 py-2">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-4/5 bg-keyboard7-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-4/5 bg-keyboard8-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-4/5 bg-keyboard9-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>
          <a
            href="cart"
            class="absolute w-16 h-16 right-32 bottom-10 bg-cart-icon bg-cover rounded-full
            hover:brightness-50 font-bold text-5xl px-3"
          >
            {" "}
          </a>
        </div> */}
      </community>

      {/* หน้า Profile */}
      <profile>
        {/* <div class="flex items-stretch space-x-7">
          <div
            className="profile-pic"
            class="absolute w-60 h-60 left-60 top-1/6 m-10 bg-bg-profile rounded-full"
          >
            <div class="absolute w-56 h-56 left-0 top-1/6 m-2 bg-profile1-pic bg-cover rounded-full"></div>
          </div>
          <div
            className="profile-detail"
            class="absolute w-96 h-60 right-1/4 top-1/6 m-10 bg-bg-profile rounded-xl "
          >
            <div
              className="username"
              class="absolute w-full h-40 bg-transparent 
          text-white font-bold leading-10 px-4 py-1 text-2xl "
            >
              OppKunG
            </div>
            <div
              className="edit-profile"
              class="absolute w-10 h-40 bg-transparent right-3 top-3"
            >
              <a
                href="edit"
                class="text-white font-semibold leading-5 underline hover:text-navbar-ptr-color"
              >
                Edit
              </a>
            </div>
            <div
              class="absolute w-auto h-40 left-4 right-4 top-1/4 bg-transparent overflow-auto
          text-white text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <a
            href="add-comment"
            class="absolute w-14 h-14 left-3/4 top-1/6 m-10 bg-bg-profile rounded-full
            text-white  hover:text-white hover:bg-navbar-ptr-color font-bold text-5xl px-3"
          >
            +
          </a>
          <div
            className="my-keyboard"
            class="absolute w-2/3 h-60 right-60 bottom-5 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-3 text-xl"
          >
            My Keyboard Design
            <div class="w-full h-full bg-transparent flex items-stretch space-x-7 px-5 py-5">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-5/6 bg-keyboard1-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-5/6 bg-keyboard2-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-5/6 bg-keyboard3-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>
        </div> */}
      </profile>
    </body>
  );
}
