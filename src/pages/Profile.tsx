import ProfileLayout from "@/layouts/ProfileLayout";
// import RecentMessages from "@/components/profile/RecentMessages";
// import RecentBookings from "@/components/profile/RecentBookings";
// import RecentProjects from "@/components/profile/RecentProjects";
import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { useAuthHook } from "@/providers/AuthProvider";
import { useState } from "react";
import ProfileDetails from "@/components/profile/ProfileDetails";
import EditProfile from "@/components/profile/EditProfile";

const Profile = () => {
  const { user, isSubmitting, updateUser, logout } = useAuthHook();
  const [isEditting, setIsEditting] = useState<boolean>(false);

  const editToggle = () => {
    setIsEditting(!isEditting);
  };

  return (
    <ProfileLayout>
      <div className="flex justify-between items-center gap-4 mb-4">
        <h2 className="text-xl font-medium">My Profile</h2>
        <Button size="sm" onClick={editToggle}>
          {isEditting ? (
            <>
              Cancel <X className="h-3 w-3 ml-2" />
            </>
          ) : (
            <>
              Edit Profile <Pencil className="h-3 w-3 ml-2" />
            </>
          )}
        </Button>
      </div>
      {!isEditting ? (
        <ProfileDetails
          user={user}
          isSubmitting={isSubmitting}
          logout={logout}
        />
      ) : (
        <EditProfile
          user={user}
          isSubmitting={isSubmitting}
          updateUser={updateUser}
        />
      )}
    </ProfileLayout>
  );
};

export default Profile;
