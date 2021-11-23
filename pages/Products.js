import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/HairOil">Hair Oil</Link>
        </li>
        <li>
          <Link to="/products/HairOilCoconut">Hair Oil-Coconut</Link>
        </li>
        <li>
          <Link to="/products/HairOilJasmine">Hair Oil-Jasmine</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
