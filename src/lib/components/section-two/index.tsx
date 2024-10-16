import Button from "@/lib/components/button";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="">
      <div
        className="flex flex-col min-[1018px]:flex-row min-[1018px]:gap-0 
      min-[722px]:gap-[180px] gap-[310px]  items-center justify-between"
      >
        <div className="">
          <div className=" rounded-[19px] relative w-[317px] h-[356px] border-dashed border-2 border-[#F25353]">
            <Image
              src={"/image/image-four.png"}
              alt="Cover Image"
              className=" filter grayscale absolute top-[-140px] min-[722px]:top-[-90px] right-[29px] min-[722px]:right-[-190px] w-[251px] h-[350px] object-cover rounded-[15px]"
              width={2740}
              height={2740}
              quality={75}
            />
            <Image
              src={"/image/image-two.png"}
              alt="Cover Image"
              className=" filter grayscale absolute min-[722px]:bottom-[-90px] bottom-[-230px] left-[31px] 
              min-[722px]:left-[-20px] w-[251px] h-[350px] object-cover rounded-[15px]"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>
        </div>
        <div className="">
          <p className="text-sm text-[#F25353] font-semibold">Our Story</p>
          <h1
            className="text-3xl w-full leading-[1.2] mt-2 
          min-[491px]:w-[370px]"
          >
            Learn A Little About Us And What We Hope To Achieve
          </h1>
          <p
            className="mt-[30px] text-[#666666] w-full 
          min-[491px]:w-[370px] min-[1132px]:w-[450px]"
          >
            We believe every child should have a chance at a good life, good
            food and overall a great future that is why we try everything in our
            power to provide, nurture and cater for each child.
          </p>
          <Button className="mt-10 w-[142px] h-[49px] btn-gradient">
            Learn More
          </Button>
        </div>
      </div>

      <div
        className="flex  flex-col min-[1018px]:flex-row  min-[1018px]:gap-0 min-[722px]:gap-[250px] gap-[310px] min-[1018px]:mt-[20rem] 
      mt-[7rem]
      sm:mt-[12rem] items-center justify-between"
      >
        <div className="">
          <p className="text-sm text-[#F25353] font-semibold">Our Mission</p>
          <h1
            className="text-3xl leading-[1.2] mt-2
          w-full 
          min-[491px]:w-[219px]"
          >
            Why Do We Do What We Do ?
          </h1>
          <p
            className="mt-[15px] text-[#666666] 
          w-full
          min-[491px]:w-[370px] min-[1132px]:w-[450px]"
          >
            We believe every child should have a chance at a good life, good
            food and overall a great future that is why we try everything in our
            power to provide, nurture and cater for each child.
          </p>
          <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
            Learn More
            <object
              className="w-[24px]"
              type="image/svg+xml"
              data={"/svg/arrow.svg"}
            ></object>
          </p>
        </div>

        <div className="">
          <div className=" rounded-[19px] relative w-[317px] h-[356px] ">
            <Image
              src={"/image/image-five.png"}
              alt="Cover Image"
              className="filter grayscale absolute 
              min-[722px]:top-[-120px] top-[-230px] left-[1px] z-20 min-[722px]:left-[-200px] w-[295px] h-[410px] object-cover rounded-[15px]"
              width={2740}
              height={2740}
              quality={75}
            />
            <Image
              src={"/image/image-two.png"}
              alt="Cover Image"
              className=" filter grayscale absolute bottom-[-5px] left-[20px] w-[263px] h-[260px] object-cover rounded-[15px]"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
