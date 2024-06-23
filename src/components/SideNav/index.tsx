import LocationView from "./LocationView";
import NavLinks from "./NavLinks";
import ProfileView from "./ProfileView";
import SocialLinks from "./SocialLinks";

export default function SideNav() {
  return (
    <nav className="p-6 bg-white w-full h-full rounded-3xl flex flex-col gap-6">
      <ProfileView />
      <hr />
      <NavLinks />
      <hr />
      <LocationView />
      <hr />
      <SocialLinks />
    </nav>
  );
}
