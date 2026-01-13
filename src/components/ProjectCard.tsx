import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
}

export default function ProjectCard({ id, title, category, imageUrl }: ProjectCardProps) {
    return (
        <Link href={`/projects/${id}`} className="group block relative overflow-hidden aspect-[3/4]">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-1">{title}</h3>
                <span className="text-xs font-bold text-white uppercase tracking-widest opacity-80">{category}</span>
            </div>
        </Link>
    );
}
