import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
}

export default function ServiceCard({
  icon,
  name,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center p-6 shadow-lg h-full text-center">
      <Image src={icon} alt="service-icon" width={60} height={60}  />
      <h3 className="my-4 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r  from-indigo-500 via-violet-500 to-indigo-900 animate-gradient">
        {name}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
