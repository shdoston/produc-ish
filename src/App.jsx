import { useState } from "react";
import Title from "./components/Title";
import Product from "./components/Product";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
    {
      id: 14,
      title: "Knoll Saarinen Executive Conference Chair",
      description:
        "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      category: "furniture",
      price: 499.99,
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
      ],
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description:
        "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      category: "furniture",
      price: 799.99,
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      ],
    },
    {
      id: 16,
      title: "Apple",
      description:
        "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      category: "groceries",
      price: 1.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
      ],
    },
    {
      id: 18,
      title: "Cat Food",
      description:
        "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      category: "groceries",
      price: 8.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
      ],
    },
    {
      id: 19,
      title: "Chicken Meat",
      description:
        "Fresh and tender chicken meat, suitable for various culinary preparations.",
      category: "groceries",
      price: 9.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
      ],
    },
    {
      id: 20,
      title: "Cooking Oil",
      description:
        "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      category: "groceries",
      price: 4.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
      ],
    },
    {
      id: 21,
      title: "Cucumber",
      description:
        "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      category: "groceries",
      price: 1.49,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
      ],
    },
    {
      id: 22,
      title: "Dog Food",
      description:
        "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      category: "groceries",
      price: 10.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
      ],
    },
    {
      id: 24,
      title: "Fish Steak",
      description:
        "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      category: "groceries",
      price: 14.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
      ],
    },
    {
      id: 25,
      title: "Green Bell Pepper",
      description:
        "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      category: "groceries",
      price: 1.29,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
      ],
    },
    {
      id: 26,
      title: "Green Chili Pepper",
      description:
        "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      category: "groceries",
      price: 0.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
      ],
    },
    {
      id: 27,
      title: "Honey Jar",
      description:
        "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      category: "groceries",
      price: 6.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
      ],
    },
    {
      id: 28,
      title: "Ice Cream",
      description:
        "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      category: "groceries",
      price: 5.49,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
      ],
    },
    {
      id: 29,
      title: "Juice",
      description:
        "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      category: "groceries",
      price: 3.99,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
      ],
    },
    {
      id: 30,
      title: "Kiwi",
      description:
        "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      category: "groceries",
      price: 2.49,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
      ],
    },

    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: "beauty",
      price: 8.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
      ],
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
    },
  ]);

  const deleteBtn = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  return (
    <div id="container">
      <h1>Products</h1>
      <Title products={products} />

      <ul className="grid-container">
        {products.map((product, arr) => {
          return (
            <Product product={product} key={product.id} deleteBtn={deleteBtn} />
          );
        })}
      </ul>
    </div>
  );
};
export default App;
