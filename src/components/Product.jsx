function Product({ product, deleteBtn }) {
  return (
    <li className="list">
      <img src={product.images[0]} alt="" width={100} />
      <h2>{product.title}</h2>
      <p className="list-text">Category: {product.category}</p>
      <p className="list-text"> price: {product.price}</p>
      <button className="Btn" onClick={() => deleteBtn(product.id)}>
        Delete
      </button>
    </li>
  );
}
export default Product;
