interface ProjectDetailGalleryProps {
    image: string;
}

export default function ProjectDetailGallery({
    image,
}: ProjectDetailGalleryProps) {
    if (!image) return null;

    return (
        <div className="relative bg-white py-0">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
                <div className="aspect-[1216/699] sm:aspect-[1216/699] lg:aspect-[1216/699] w-full overflow-hidden bg-zinc-100">
                    <img
                        src={image}
                        alt="Project showcase"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
