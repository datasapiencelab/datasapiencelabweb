interface ProjectDetailImagesProps {
    image: string;
}

export default function ProjectDetailImages({
    image,
}: ProjectDetailImagesProps) {
    if (!image) return null;

    return (
        <div className="relative bg-white py-0">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
                <div className="w-full aspect-[592/421] sm:aspect-[1280/720] overflow-hidden bg-zinc-100">
                    <img
                        src={image}
                        alt="Project hero"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
