import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard('1ed54d58-f16f-420e-8750-9c9cccdeedb3');
    const products = await getProducts({ isFeatured: true })
    return (
        <Container>
            <div className="space-y-12 pb-12">
                <Billboard data={billboard} />
                <section className="flex flex-col gap-y-6 rounded-3xl bg-white/80 px-4 py-6 shadow-sm ring-1 ring-slate-100 sm:px-6 lg:px-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                            Why parents love Little Monsters
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-600 md:text-base">
                            Built for calm, connected moments—on airplanes, in waiting rooms,
                            and at the kitchen table. Every kit is designed to spark stories,
                            not screen time.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="flex flex-col gap-y-1 rounded-2xl bg-[#FFF7E6] p-4">
                            <p className="text-sm font-semibold text-slate-900">Screen-free play</p>
                            <p className="text-xs text-slate-700">
                                Hands-on activities that keep little minds busy—no apps, logins, or chargers needed.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 rounded-2xl bg-[#E3F2FD] p-4">
                            <p className="text-sm font-semibold text-slate-900">Travel-friendly</p>
                            <p className="text-xs text-slate-700">
                                Compact, mess-friendly kits that slip into backpacks and carry-ons with ease.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1 rounded-2xl bg-[#E8F5E9] p-4">
                            <p className="text-sm font-semibold text-slate-900">Parent-approved</p>
                            <p className="text-xs text-slate-700">
                                Thoughtfully curated, eco-conscious materials so you can feel good about every play session.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured kits" items={products} />

                    <div className="mt-4 grid gap-4 rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-100 md:grid-cols-[2fr,1.5fr]">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-slate-900">
                                Loved by little explorers (and their grown-ups)
                            </h3>
                            <p className="text-sm text-slate-600">
                                “Our flights used to mean endless snacks and screen battles. Now my daughter asks
                                for her Little Monsters kit before we even leave the house.”
                            </p>
                            <p className="text-xs font-medium text-slate-500">
                                — Aditi, mum of a 5-year-old
                            </p>
                        </div>
                        <div className="space-y-2 rounded-2xl bg-[#FFF2CC] p-4">
                            <p className="text-sm font-semibold text-slate-900">
                                Ready for happier, calmer adventures?
                            </p>
                            <p className="text-xs text-slate-700">
                                Choose a kit that matches your child’s age and curiosity. We’ll handle the rest.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default HomePage;
