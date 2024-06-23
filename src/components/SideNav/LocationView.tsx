import Image from "next/image";

export default function LocationView() {
  return (
    <div className="flex gap-4">
      <Image
        src="/icons/map-pin-simple-area-bold.svg"
        alt="Location Pin"
        width={20}
        height={20}
      />
      <div>
        <p className="font-medium">Bengaluru</p>
        <p className="text-sm text-gray-500">Karnataka, India</p>
      </div>
    </div>
  );
}
