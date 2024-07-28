import HomeLayout from "@/layouts/HomeLayout";
import ProfileLayout from "@/layouts/ProfileLayout";

const Messages = () => {
  return (
    <HomeLayout>
      <ProfileLayout>
        <h2 className="text-xl font-medium">Messages</h2>
      </ProfileLayout>
    </HomeLayout>
  );
};

export default Messages;
