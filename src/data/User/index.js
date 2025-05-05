import {
  faAddressBook,
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
    icon: faAddressBook,
    name: "Addresses",
    path: "Address",
  },
  {
    icon: faLock,
    name: "Reset Password",
    path: "ResetPassword",
  },
  {
    icon: faDoorOpen,
    name: "Log Out",
    path: "/Login",
  },
];
export const AddressData = [
  {
    name: "John Doe",
    address:
      "32B, Building Name, Landmark, Location, StreetName, State, City and Town, Phnom Penh, Cambodia",
    phone: "+855 123 456 789",
    email: "example@gmail.com",
  },
  {
    name: "Kimsor",
    address:
      "31B, Building Name, Landmark, Location, StreetName, State, City and Town, Phnom Penh, Cambodia",
    phone: "+855 123 456 789",
    email: "example@gmail.com",
  },
  {
    name: "Taylor",
    address:
      "30B, Building Name, Landmark, Location, StreetName, State, City and Town, Phnom Penh, Cambodia",
    phone: "+855 123 456 789",
    email: "example@gmail.com",
  },
  {
    name: "Misha",
    address:
      "29B, Building Name, Landmark, Location, StreetName, State, City and Town, Phnom Penh, Cambodia",
    phone: "+855 123 456 789",
    email: "example@gmail.com",
  },
  {
    name: "George",
    address:
      "28B, Building Name, Landmark, Location, StreetName, State, City and Town, Phnom Penh, Cambodia",
    phone: "+855 123 456 789",
    email: "example@gmail.com",
  },
];
