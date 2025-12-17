import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
    return ( 
        <section className="space-y-3">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {title}
                </h2>
                <p className="text-sm text-slate-600">
                    Hand-picked, screen-free kits loved by kids and trusted by parents.
                </p>
            </div>
            {items?.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(item => (
                    <div key={item.id}>
                        <ProductCard key={item.id} data={item} />
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default ProductList;
