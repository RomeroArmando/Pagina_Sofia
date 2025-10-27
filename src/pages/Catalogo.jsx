import data from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Catalogo() {
  return (
    <div className="catalog-container">
      <div className="catalog-grid">
        {data.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
      </div>
    </div>
    
  );
}
