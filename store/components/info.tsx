import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
    return ( 
        <div className="space-y-6">
            <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-600">
                    Screen-free learning · Travel-friendly
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    {data.name}
                </h1>
                <p className="max-w-xl text-sm text-slate-700 md:text-base">
                    Designed to help your child unplug, explore, and imagine—without screens.
                    Perfect for flights, road trips, and slow weekends at home.
                </p>
            </div>

            <div className="flex items-end justify-between">
                <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Investment in curious little minds
                    </p>
                    <p className="text-2xl font-semibold text-slate-900">
                        <Currency value={data?.price} />
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-y-6 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center gap-x-4">
                    <h3 className="text-sm font-semibold text-slate-900">Size</h3>
                        <div>
                            {data?.size?.value}
                        </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="text-sm font-semibold text-slate-900">Color</h3>
                    <div
                        className="h-6 w-6 rounded-full border border-slate-300"
                        style={{ backgroundColor: data?.color?.value }}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-y-3 pt-2">
                <Button className="flex items-center gap-x-2">
                    <span>Get this kit</span>
                    <ShoppingCart className="h-4 w-4" />
                </Button>
                <p className="text-xs text-slate-500">
                    Free from screens. Loved by parents. Built for tiny hands and big imaginations.
                </p>
            </div>
        </div>
     );
}
 
export default Info;
