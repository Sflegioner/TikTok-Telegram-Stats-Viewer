import Image from "next/image";

export default function Card({ title, description, imageUrl }:{ title: string; description: string; imageUrl: string })
{
  return (
    <div className="card">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}