"use client"

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import PreviewModal from './../preview-modal';
import usePreviewModal from "@/hooks/use-preview-modal";
import { MouseEventHandler } from 'react';
import useCart from "@/hooks/use-cart";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

    return ( 
        <div
            onClick={handleClick}
            className="group cursor-pointer space-y-4 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            {/* Images and actions */}
            <div className="relative aspect-square rounded-xl bg-[#FFF2CC]">
                <Image
                    fill
                    src={data?.images?.[0]?.url}
                    alt="Images"
                    className="aspect-square rounded-xl object-cover" />
                <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 transition group-hover:opacity-100">
                    <div className="flex justify-center gap-x-4">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-slate-700" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-slate-700" />}
                        />
                    </div>
                </div>
            </div>
            {/* Copy */}
            <div className="space-y-1">
                <p className="text-base font-semibold text-slate-900 md:text-lg">
                    {data?.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {data.category.name}
                </p>
                <p className="text-xs text-slate-600 md:text-sm">
                    Screen-free, travel-friendly play kit designed for curious little minds.
                </p>
            </div>
            {/* Price / meta */}
            <div className="flex items-center justify-between pt-1">
                <div className="flex flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-600">
                        Parent-approved · Eco-conscious
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                        <Currency value={data?.price} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
