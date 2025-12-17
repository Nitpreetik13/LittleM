import { Billboard as BillboardType } from '@/types';

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFF7E6] via-white to-[#E3F2FD] p-4 sm:p-6 lg:p-8">
            <div
                className="relative flex aspect-square flex-col overflow-hidden rounded-3xl md:aspect-[2.4/1]"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${data?.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7E6]/95 via-white/80 to-transparent" />

                <div className="relative z-10 flex h-full w-full flex-col items-start justify-center gap-y-5 px-4 py-6 sm:px-8 lg:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                        For curious little monsters & calm, happy parents
                    </p>
                    <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {data?.label}
                    </h1>
                    <p className="max-w-lg text-sm text-slate-700 md:text-base">
                        Screen-free, travel-friendly activity kits that turn wait-times and weekends
                        into imaginative stories—no batteries, apps, or guilt required.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm">
                            Screen-free learning
                        </span>
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm">
                            Parent-approved
                        </span>
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm">
                            Travel-friendly
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Billboard;
