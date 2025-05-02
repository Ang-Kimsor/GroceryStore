import {
  faDoorOpen,
  faHeart,
  faLock,
  faShop,
  faShoppingCart,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const SideMenuData = [
  {
    icon: faUser,
    name: "Account Information",
    path: "/UserDashBoard",
  },
  {
    icon: faTruck,
    name: "Track Order",
    path: "TrackOrder",
  },
  {
    icon: faShop,
    name: "Your Orders",
    path: "TrackOrder/Detail",
  },
  {
    icon: faHeart,
    name: "Wishlist",
    path: "Wishlist",
  },
  {
    icon: faShoppingCart,
    name: "Your Cart",
    path: "Cart",
  },
  {
    icon: faLock,
    name: "Reset Password",
    path: "/Error",
  },
  {
    icon: faDoorOpen,
    name: "Log Out",
    path: "/Error",
  },
];
