import ProfileLayout from "@/layouts/ProfileLayout";
import RecentMessages from "@/components/profile/RecentMessages";
import RecentBookings from "@/components/profile/RecentBookings";
import RecentProjects from "@/components/profile/RecentProjects";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Pencil, User } from "lucide-react";
import { useAuthHook } from "@/providers/AuthProvider";

const Profile = () => {
  const { user, isSubmitting, logout } = useAuthHook();

  return (
    <ProfileLayout>
      <div className="flex justify-between items-center gap-4 mb-4">
        <h2 className="text-xl font-medium">My Profile</h2>
        <Button size="sm">
          Edit Profile <Pencil className="h-3 w-3 ml-2" />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col md:inline-block items-center gap-2">
            <div className="aspect-square w-[150px] md:w-[200px] flex items-center justify-center border-4 border-primary rounded-full overflow-hidden">
              {user?.profileImg ? (
                <img
                  src={user?.profileImg}
                  alt={user?.firstname}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <User className="h-[90%] w-[90%] text-primary" />
              )}
            </div>
            <p className="capitalize text-center text-primary font-medium">
              {user?.role === "agent" && "Agent"}
            </p>
          </div>
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
              <span className="text-muted-foreground text-sm">
                Email Address
              </span>
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
          <Button
            variant="destructive"
            onClick={logout}
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
              "Sign Out"
            ) : (
              <LoaderCircle className="h-5 w-5 animate-spin" />
            )}
          </Button>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
