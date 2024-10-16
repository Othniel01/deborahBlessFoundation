import Image from "next/image";

export default function ImageCarousel() {
  return (
    <div className="w-full flex flex-row  items-center bg-black h-[400px]  min-[587px]:h-[500px]">
      <Image
        src={"/image/image-three.png"}
        alt="Cover Image"
        className="h-full w-[33%] filter grayscale  object-cover"
        width={2740}
        height={2740}
        quality={75}
      />
      <Image
        src={"/image/image-one.png"}
        alt="Cover Image"
        className="h-full w-[34%] object-cover"
        width={2740}
        height={2740}
        quality={75}
      />
      <Image
        src={"/image/image-two.png"}
        alt="Cover Image"
        className="h-full w-[33%] filter grayscale  object-cover"
        width={2740}
        height={2740}
        quality={75}
      />
    </div>
  );
}
