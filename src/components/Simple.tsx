import { useRive } from "@rive-app/react-canvas";

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: false,
  });

  console.log(rive);
  return (
    <div className="w-full flex justify-center items-center min-h-[300px]">
      <div className="w-[400px] h-[400px]">
        <RiveComponent
          onMouseEnter={() => rive?.play()}
          onMouseLeave={() => rive?.pause()}
        />
      </div>
    </div>
  );
}
