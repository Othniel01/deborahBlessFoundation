export default function MakeMap() {
  return (
    <div className="relative  h-fit w-fit">
      <object
        className="min-[778px]:w-[508px] w-[310px]"
        type="image/svg+xml"
        data={"/svg/NG-map.svg"}
      ></object>

      <div className="marker absolute cursor-pointer min-[778px]:left-[11.5rem] left-[6.8rem] top-[7.8rem] min-[778px]:top-[12.9rem] w-4 h-4 rounded-full bg-red-600">
        <div className="tooltip absolute left-[-55px] top-[-40px] w-[128px]  shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] rounded-md h-8 bg-white flex items-center justify-center">
          <p className="text-xs">Operation OGD</p>
        </div>
      </div>
    </div>
  );
}

// bg-[rgba(62,77,98,0.11)]
