import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Black Bomber jacket for women",
    category: "women",
    image: p1_img,
    new_price: 2499,
    old_price: 3999,
  },
  {
    id: 2,
    name: "Pink Cotton Top",
    category: "women",
    image: p2_img,
    new_price: 399,
    old_price: 599,
  },
  {
    id: 3,
    name: "Sportswear for women",
    category: "women",
    image: p3_img,
    new_price: 599,
    old_price: 899,
  },
  {
    id: 4,
    name: "Brown Half Sleeve top",
    category: "women",
    image: p4_img,
    new_price: 799,
    old_price: 999,
  },
  {
    id: 5,
    name: "Shimmery crop top",
    category: "women",
    image: p5_img,
    new_price: 499,
    old_price: 699,
  },
  {
    id: 6,
    name: "Brown tshirt for Women",
    category: "women",
    image: p6_img,
    new_price: 599,
    old_price: 899,
  },
  {
    id: 7,
    name: "White Turtleneck for Women",
    category: "women",
    image: p7_img,
    new_price: 549,
    old_price: 689,
  },
  {
    id: 8,
    name: "Black Printed Top",
    category: "women",
    image: p8_img,
    new_price: 499,
    old_price: 649,
  },
  {
    id: 9,
    name: "Red floral top",
    category: "women",
    image: p9_img,
    new_price: 749,
    old_price: 899,
  },
  {
    id: 10,
    name: "Pullover Tshirt for women",
    category: "women",
    image: p10_img,
    new_price: 999,
    old_price: 1299,
  },
  {
    id: 11,
    name: "Black Tank Top",
    category: "women",
    image: p11_img,
    new_price: 399,
    old_price: 499,
  },
  {
    id: 12,
    name: "Navy Blue Full sleeves Tshirt",
    category: "women",
    image: p12_img,
    new_price: 549,
    old_price: 799,
  },
  {
    id: 13,
    name: "Green Solid Full-Zip Hoodie Jacket for Men",
    category: "men",
    image: p13_img,
    new_price: 1499,
    old_price: 1999,
  },
  {
    id: 14,
    name: "Men Blue Whited Full-Zip Bomber Jacket for Men",
    category: "men",
    image: p14_img,
    new_price: 1999,
    old_price: 2999,
  },
  {
    id: 15,
    name: "Men Trendy Black and White Jacket for Men",
    category: "men",
    image: p15_img,
    new_price: 999,
    old_price: 1299,
  },
  {
    id: 16,
    name: "Men Orange Navy Full-Zip jacket for Men",
    category: "men",
    image: p16_img,
    new_price: 1249,
    old_price: 1699,
  },
  {
    id: 17,
    name: "Men Denim Full Sleeves Jacket for Men",
    category: "men",
    image: p17_img,
    new_price: 1699,
    old_price: 1999,
  },
  {
    id: 18,
    name: "Men Grey Sports Jacket for Men",
    category: "men",
    image: p18_img,
    new_price: 1699,
    old_price: 1899,
  },
  {
    id: 19,
    name: "Men White Sports Jacket for Men",
    category: "men",
    image: p19_img,
    new_price: 1649,
    old_price: 2199,
  },
  {
    id: 20,
    name: "Men Navy Casual Jacket for Men",
    category: "men",
    image: p20_img,
    new_price: 849,
    old_price: 999,
  },
  {
    id: 21,
    name: "Men Grey Black Red Zipper Hoodie Jacket for Men",
    category: "men",
    image: p21_img,
    new_price: 1349,
    old_price: 1649,
  },
  {
    id: 22,
    name: "Men White Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 1899,
    old_price: 2499,
  },
  {
    id: 23,
    name: "Men Deep Green Solid Shirt",
    category: "men",
    image: p23_img,
    new_price:999 ,
    old_price: 1299,
  },
  {
    id: 24,
    name: "Men Black Leather Jacket",
    category: "men",
    image: p24_img,
    new_price: 2499,
    old_price: 3699,
  },
  {
    id: 25,
    name: "Blue Hoodie for Kids",
    category: "kid",
    image: p25_img,
    new_price: 449,
    old_price: 699,
  },
  {
    id: 26,
    name: "Black White Sweatshirt for Kids",
    category: "kid",
    image: p26_img,
    new_price: 659,
    old_price: 799,
  },
  {
    id: 27,
    name: "Black White Yellow Sweatshirt for Kids",
    category: "kid",
    image: p27_img,
    new_price: 649,
    old_price: 899,
  },
  {
    id: 28,
    name: "Grey Green Sweatshirt for Kids",
    category: "kid",
    image: p28_img,
    new_price: 549,
    old_price: 799,
  },
  {
    id: 29,
    name: "Green Yellow Navy Sweatshirt for Kids",
    category: "kid",
    image: p29_img,
    new_price: 799,
    old_price: 949,
  },
  {
    id: 30,
    name: "Bomber Jacket for Kids",
    category: "kid",
    image: p30_img,
    new_price: 849,
    old_price: 999,
  },
  {
    id: 31,
    name: "Denim Jacket for Kids",
    category: "kid",
    image: p31_img,
    new_price: 599,
    old_price: 649,
  },
  {
    id: 32,
    name: "Blue Sweatshirt for Kids",
    category: "kid",
    image: p32_img,
    new_price: 859,
    old_price: 1249,
  },
  {
    id: 33,
    name: "Navy Blue Sweatshirt for Kids",
    category: "kid",
    image: p33_img,
    new_price: 749,
    old_price: 949,
  },
  {
    id: 34,
    name: "Black Sports Jacket for Kids",
    category: "kid",
    image: p34_img,
    new_price: 759,
    old_price: 899,
  },
  {
    id: 35,
    name: "Black Sports with Orange strips Jacket for Kids",
    category: "kid",
    image: p35_img,
    new_price: 859,
    old_price: 1349,
  },
  {
    id: 36,
    name: "Black Casual Jacket for Kids",
    category: "kid",
    image: p36_img,
    new_price: 1249,
    old_price: 1999,
  },
];

export default all_product;
