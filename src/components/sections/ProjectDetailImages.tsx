interface ProjectDetailImagesProps {
    images: string[];
}

export default function ProjectDetailImages({
    images,
}: ProjectDetailImagesProps) {
    return (
        <div className="relative bg-white py-0">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="aspect-[592/421] w-full overflow-hidden bg-zinc-100"
                        >
                            <img
                                src={image}
                                alt={`Project preview ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
