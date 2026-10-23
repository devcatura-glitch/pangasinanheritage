import Image from "next/image";

interface HeritageCardProps {
  imageSrc: string;
  title: string;
  location: string;
  description: string;
}

export default function HeritageCard({ imageSrc, title, location, description }: HeritageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="relative h-48 w-full aspect-video">
        <Image 
  src={`/pangasinanheritage${imageSrc}`} 
  alt={title} 
  fill 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover" 
/>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 font-semibold">{location}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}