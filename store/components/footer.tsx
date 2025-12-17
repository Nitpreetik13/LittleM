const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-100 bg-white/80">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-y-3 text-center sm:flex-row sm:justify-between sm:text-left">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-800">
                            Little Monsters · Playful kits for screen-free stories.
                        </p>
                        <p className="text-xs text-slate-500">
                            Eco-conscious materials, parent-approved activities, made for tiny hands and big imaginations.
                        </p>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 sm:mt-0">
                        &copy; {currentYear} Little Monsters. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
