import DisplayPicture from "./DisplayPicture";

export default function ProfileView() {
  return (
    <div className="flex flex-col gap-6">
      <DisplayPicture />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-medium ">Thejus Rajendran</p>
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
          Product Designer
        </p>
      </div>
    </div>
  );
}
