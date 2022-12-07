import { getStoreCart } from "../../utilities/fakedb";

export const addToOrders = async () => {
  // get data
  const productData = await fetch("http://localhost:5000/products");
  const { products } = await productData.json();

  //get cart
  const saveCart = getStoreCart();
  const initialCart = [];

  for (const id in saveCart) {
    // console.log(id);
    const addProduct = products.find((product) => product._id === id);
    if (addProduct) {
      const quantity = saveCart[id];
      addProduct.quantity = quantity;
      initialCart.push(addProduct);
    }
  }

  return { products: products, initialCart: initialCart };
};
