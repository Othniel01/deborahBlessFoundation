import Button from "@/lib/components/button";

import Image from "next/image";

export default function SectionFour() {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <p className="text-sm text-[#F25353] font-semibold">Our Blog</p>
        <h1 className="text-3xl leading-[1.2] mt-2 ">Read Our Latest News</h1>
      </div>
      <div className="flex min-[1061px]:flex-row flex-col min-[1061px]:gap-0 gap-32 items-center justify-between mt-20 sm:mt-28">
        <div className=" min-[1061px]:w-[323px] w-full">
          <Image
            src={"/image/image-six.png"}
            alt="Cover Image"
            className="object-cover filter grayscale 
            min-[1061px]:w-[323px] w-full 
            min-[1061px]:h-[189px] h-[320px] sm:h-[470px] rounded-t-[15px]"
            width={2740}
            height={2740}
            quality={75}
          />
          <p className="mt-8 text-sm">February 31, 2022</p>
          <h1 className=" mt-2 text-2xl w-full">The Ashley Mutengo Story</h1>

          <p className="mt-5 text-[#666666]">
            We believe every child should have a chance at a good life, good
            food and overall a great future tha
          </p>

          <p className="mt-5 gap-3 flex items-center text-[#F25353]">
            Learn More
            <object
              className="w-[24px]"
              type="image/svg+xml"
              data={"/svg/arrow.svg"}
            ></object>
          </p>
        </div>
        <div className="min-[1061px]:w-[323px] w-full">
          <Image
            src={"/image/image-six.png"}
            alt="Cover Image"
            className="object-cover filter grayscale min-[1061px]:w-[323px] w-full 
            min-[1061px]:h-[189px] h-[320px] sm:h-[470px] rounded-t-[15px]"
            width={2740}
            height={2740}
            quality={75}
          />
          <p className="mt-8 text-sm">February 31, 2022</p>
          <h1 className=" mt-2 text-2xl w-full">The Ashley Mutengo Story</h1>

          <p className="mt-5 text-[#666666]">
            We believe every child should have a chance at a good life, good
            food and overall a great future tha
          </p>

          <p className="mt-5 gap-3 flex items-center text-[#F25353]">
            Learn More
            <object
              className="w-[24px]"
              type="image/svg+xml"
              data={"/svg/arrow.svg"}
            ></object>
          </p>
        </div>
        <div className="min-[1061px]:w-[323px] w-full">
          <Image
            src={"/image/image-six.png"}
            alt="Cover Image"
            className="object-cover filter grayscale min-[1061px]:w-[323px] w-full 
            min-[1061px]:h-[189px] h-[320px] sm:h-[470px] rounded-t-[15px]"
            width={2740}
            height={2740}
            quality={75}
          />
          <p className="mt-8 text-sm">February 31, 2022</p>
          <h1 className=" mt-2 text-2xl w-full">The Ashley Mutengo Story</h1>

          <p className="mt-5 text-[#666666]">
            We believe every child should have a chance at a good life, good
            food and overall a great future tha
          </p>

          <p className="mt-5 gap-3 flex items-center text-[#F25353]">
            Learn More
            <object
              className="w-[24px]"
              type="image/svg+xml"
              data={"/svg/arrow.svg"}
            ></object>
          </p>
        </div>
      </div>
      <Button className=" self-center mt-28 w-[142px] h-[49px] btn-gradient">
        See More
      </Button>
    </div>
  );
}
