import { User } from "@/providers/AuthProvider";
import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import ProfileAvatar from "../global/ProfileAvatar";

type ProfileDetailsProps = {
  user: User | null;
  isSubmitting: boolean;
  logout: () => void;
};

const ProfileDetails = ({
  user,
  isSubmitting,
  logout,
}: ProfileDetailsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <ProfileAvatar profileImg={user?.profileImg} role={user?.role} />
        <div className="w-full flex flex-col gap-4">
          <div className="">
            <span className="text-muted-foreground text-sm">First Name</span>
            <p className="mt-2 md:text-lg py-2 px-4 border border-slate-300 rounded-full">
              {user?.firstname}
            </p>
          </div>
          <div className="">
            <span className="text-muted-foreground text-sm">Last Name</span>
            <p className="mt-2 md:text-lg py-2 px-4 border border-slate-300 rounded-full">
              {user?.lastname}
            </p>
          </div>
          <div className="">
            <span className="text-muted-foreground text-sm">Email Address</span>
            <p className="mt-2 md:text-lg py-2 px-4 border border-slate-300 rounded-full truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
      {/* {user?.role === "agent" && <RecentProjects />}
          <RecentMessages />
          <RecentBookings /> */}
      <div className="text-end">
        <Button variant="destructive" onClick={logout} disabled={isSubmitting}>
          {!isSubmitting ? (
            "Sign Out"
          ) : (
            <LoaderCircle className="h-5 w-5 animate-spin" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProfileDetails;
