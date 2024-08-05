import HomeLayout from "@/layouts/HomeLayout";
import ProfileLayout from "@/layouts/ProfileLayout";
import Building1 from "@/assets/building-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import RecentMessages from "@/components/profile/RecentMessages";
import RecentBookings from "@/components/profile/RecentBookings";
import RecentProjects from "@/components/profile/RecentProjects";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import apiRequest from "@/lib/apiRequest";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  profileImg: string;
  isAgent: boolean;
};

const Profile = () => {
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const { firstname, lastname, email, password, profileImg, isAgent }: User = {
    id: "12",
    firstname: "Clint Joey",
    lastname: "Llosala",
    email: "llosalaclintjoey@gmail.com",
    password: "hello1234",
    profileImg: Building1,
    isAgent: true,
  };
  const navigate = useNavigate();

  const onSignOut = async () => {
    try {
      setIsLoggingOut(true);

      const res = await apiRequest.post("/auth/logout");

      if (!res) throw new Error("There was an error logging out");

      localStorage.removeItem("user");
      toast.success(res.data.message);
      navigate("/");
    } catch (error: any) {
      console.error(error.message);
      toast.error("There was an error logging out");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <HomeLayout>
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
              <div className="aspect-square w-[150px] md:w-[200px] border-4 border-primary rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt={firstname}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="capitalize text-center text-primary font-medium">
                {isAgent && "Agent"}
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="">
                <span className="text-muted-foreground text-sm">
                  First Name
                </span>
                <p className="mt-2 md:text-lg py-2 px-4 border border-slate-300 rounded-full">
                  {firstname}
                </p>
              </div>
              <div className="">
                <span className="text-muted-foreground text-sm">Last Name</span>
                <p className="mt-2 md:text-lg py-2 px-4 border border-slate-300 rounded-full">
                  {lastname}
                </p>
              </div>
              <div className="">
                <span className="text-muted-foreground text-sm">
                  Email Address
                </span>
                <p className="mt-2 md:text-lg py-2 px-4 border border-slate-300 rounded-full truncate">
                  {email}
                </p>
              </div>
            </div>
          </div>
          {/* {role === "agent" && <RecentProjects />}
          <RecentMessages />
          <RecentBookings /> */}
          <div className="text-end">
            <Button
              variant="destructive"
              onClick={onSignOut}
              disabled={isLoggingOut}
            >
              {!isLoggingOut ? (
                "Sign Out"
              ) : (
                <LoaderCircle className="h-5 w-5 animate-spin" />
              )}
            </Button>
          </div>
        </div>
      </ProfileLayout>
    </HomeLayout>
  );
};

export default Profile;
