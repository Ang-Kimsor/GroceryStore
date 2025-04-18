import { faEye, faGem } from "@fortawesome/free-regular-svg-icons";
import Banner from "./../../assets/about.jpg";
import Story from "./../../assets/berry.jpg";
import P1 from "./../../assets/p1.jpg";
import P2 from "./../../assets/p2.jpg";
import P3 from "./../../assets/p3.jpg";
import Sub from "./../../assets/subscribe.jpg";
import {
  faBullseye,
  faCreditCard,
  faMoneyBill,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
export const FeatureBigData = {
  img: Banner,
  title: "About us",
};
export const FeatureStoryData = {
  img: Story,
  title1: "Who are we",
  title2: "The House of ethnical japanese products",
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis ea dicta illo consequuntur necessitatibus beatae doloribus quaerat voluptatibus quod?",
};
export const FeatureCustomerData = {
  title1: "What our clients love about us",
  title2: "Customer Feedback",
  des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ipsa odio reprehenderit facere quam molestias minima eligendi. Dignissimos recusandae cumque dolore ullam nulla quaerat obcaecati dolores maxime, aspernatur iusto.",
  rate: 4,
  customer: [
    {
      img: P1,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae mollitia optio voluptas, voluptate magnam impedit adipisci, omnis expedita voluptates eveniet quaerat quis obcaecati dolorum?",
      name: "Vyom Digion",
      type: "Verified Customer",
    },
    {
      img: P2,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae mollitia optio voluptas, voluptate magnam impedit adipisci, omnis expedita voluptates eveniet quaerat quis obcaecati dolorum?",
      name: "Jennie Kim",
      type: "Verified Customer",
    },
    {
      img: P3,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae mollitia optio voluptas, voluptate magnam impedit adipisci, omnis expedita voluptates eveniet quaerat quis obcaecati dolorum?",
      name: "Chalotte",
      type: "Customer",
    },
  ],
};
export const FeatureVisionData = [
  {
    icon: faEye,
    title: "Our Vision",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati iure eos repellendus perferendis laboriosam accusamus dolorum. Quasi dolor quidem dolorem unde voluptatibus, incidunt laudantium ab, fugiat similique reprehenderit aperiam.`,
  },
  {
    icon: faGem,
    title: "Our Values",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati iure eos repellendus perferendis laboriosam accusamus dolorum. Quasi dolor quidem dolorem unde voluptatibus, incidunt laudantium ab, fugiat similique reprehenderit aperiam.`,
  },
  {
    icon: faBullseye,
    title: "Our Mission",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati iure eos repellendus perferendis laboriosam accusamus dolorum. Quasi dolor quidem dolorem unde voluptatibus, incidunt laudantium ab, fugiat similique reprehenderit aperiam.`,
  },
];
export const FeaturePayData = [
  {
    icon: faTruck,
    title: "free shipping & return",
    des: `Free shipping on all orders over AED 85. *Free shipment within UAE. *Outside UAE courier charges are applicable.`,
  },
  {
    icon: faMoneyBill,
    title: "money back guarantee",
    des: `100% money back guarantee offered if you are not happy with our products.`,
  },
  {
    icon: faCreditCard,
    title: "secure payment",
    des: `Secure online payment processing with state of the art security in place.`,
  },
  {
    icon: faHackerrank,
    title: "haccp certified",
    des: `International standard defining the requirements for effective control of food safety.`,
  },
];
export const FeatureSubData = {
  title: "Stay Home and enjoy japan's finest daily essentials from our store.",
  des: "start your daily shopping with",
  link: "japansouq",
  path: "/",
  img: Sub,
};
