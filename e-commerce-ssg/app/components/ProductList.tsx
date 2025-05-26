import { Product } from '../types/product';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productListItem}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
} 