import { Role } from "@/providers/AuthProvider";
import { User } from "lucide-react";

type ProfileAvatarProps = {
  profileImg?: string;
  role?: Role;
};

const ProfileAvatar = ({ profileImg, role }: ProfileAvatarProps) => {
  return (
    <div className="flex flex-col md:inline-block items-center gap-4">
      <div className="aspect-square w-[150px] md:w-[200px] flex items-center justify-center border-4 border-primary rounded-full overflow-hidden">
        {profileImg ? (
          <img
            src={profileImg}
            alt="profile-img"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <User className="h-[90%] w-[90%] text-primary" />
        )}
      </div>
      <p className="capitalize text-center text-primary font-medium">
        {role === "agent" && "Agent"}
      </p>
    </div>
  );
};

export default ProfileAvatar;
