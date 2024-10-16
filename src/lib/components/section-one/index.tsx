import Button from "@/lib/components/button";

export default function FirstSection() {
  return (
    <div className="w-full gap-[130px] min-[1055px]:gap-0 justify-between min-[1055px]:flex-row flex-col flex items-center">
      <div className="">
        <p className="text-sm text-[#F25353] font-semibold">What we do</p>
        <h1
          className="text-3xl leading-[1.2] w-full mt-2 
        min-[474px]:w-[420px]"
        >
          We Are On A Life Changing Mission To Reduce Child Mortality
        </h1>
        <p
          className="mt-[30px] text-[#666666] 
       min-[1135px]:w-[550px] w-full min-[474px]:w-[360px]
        "
        >
          We believe every child should have a chance at a good life, good food
          and overall a great future that is why we try everything in our power
          to provide, nurture and cater for each child.
        </p>
        <Button className="mt-10 w-[142px] h-[49px] btn-gradient">
          Donate Now
        </Button>
      </div>

      <div
        className="grid min-[546px]:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)] 
      grid-rows-[repeat(1,1fr)]
      min-[546px]:grid-rows-[repeat(2,1fr)] gap-14"
      >
        <div className="">
          <object
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/suitcase.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">Vocational Skills</h1>
          <p className="text-sm text-[#666666] mt-[15px] min-[546px]:w-[220px] w-full">
            We believe every child should have a chance at a good life, good
            food and
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
          <object
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/food.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">Vocational Skills</h1>
          <p className="text-sm text-[#666666] mt-[15px]  min-[546px]:w-[220px] w-full">
            We believe every child should have a chance at a good life, good
            food and
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
          <object
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/income.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">Vocational Skills</h1>
          <p className="text-sm text-[#666666] mt-[15px] min-[546px]:w-[220px] w-full">
            We believe every child should have a chance at a good life, good
            food and
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
          <object
            className="w-[51px]"
            type="image/svg+xml"
            data={"/svg/church.svg"}
          ></object>
          <h1 className="mt-[15px] font-semibold text-lg">Vocational Skills</h1>
          <p className="text-sm text-[#666666] mt-[15px] min-[546px]:w-[220px] w-full">
            We believe every child should have a chance at a good life, good
            food and
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
      </div>
    </div>
  );
}
