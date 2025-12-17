import Container from "@/components/ui/container";
import Link from "next/link";
import { MainNav } from "@/components";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b border-slate-100 bg-white/80 backdrop-blur">
            <Container>
                <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex gap-x-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE4B5] text-sm font-semibold text-slate-900">
                            LM
                        </span>
                        <div className="flex flex-col leading-tight">
                            <p className="text-sm font-semibold tracking-tight text-slate-900">
                                Little Monsters
                            </p>
                            <p className="text-xs text-slate-500">
                                Screen-free play kits
                            </p>
                        </div>
                    </Link>
                    <MainNav data={categories || []} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}
export default Navbar;
