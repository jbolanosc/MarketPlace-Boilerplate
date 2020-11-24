import { User, Seller, Product } from "../models";
import { hashPassword } from "../util";

export function seedDB() {
  generateUser();
  generateSeller();
}

function generateUser() {
  const user = {
    name: "Josue Bolaños Carit",
    password: hashPassword("nana12"),
    email: "jbolanosc@gmail.com",
    mobile: "6049583",
    address: "Guadalupe SJ",
    profilePicture: "la",
    temp_verification_code: "la",
    favList: [""],
  };

  User.create(user, (e: Error) => {
    if (e) throw e;
    console.log("User created");
  });
}

function generateSeller() {
  const seller = {
    name: "MyStore1",
    companyName: "MyStore",
    password: hashPassword("nana12"),
    email: "mystore@gmail.com",
    phoneNumber: "+1-2345-56",
    rating: 5,
    isApproved: false,
    reviews: [],
    logo: "",
  };

  const sellerId = Seller.create(seller, (e: Error, seller: any) => {
    if (e) throw e;
    console.log("Seller created");
    generateProduct(seller._id);
  });
  return sellerId;
}

function generateProduct(sellerId: any) {
  const product = {
    name: "PS5",
    category: "Video Games",
    subcategory: "Consoles",
    price: 10.99,
    old_price: 12,
    description: "Video Game Console",
    seller: sellerId,
    images: [],
    rating: 3,
    brand: "Sony",
    reviews: [],
    countInStock: 10,
    deal: false,
  };

  Product.create(product, (e: Error) => {
    if (e) throw e;
    console.log("Product created");
  });
}
