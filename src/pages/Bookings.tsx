import HomeLayout from "@/layouts/HomeLayout";
import ProfileLayout from "@/layouts/ProfileLayout";

const Bookings = () => {
  return (
    <HomeLayout>
      <ProfileLayout>
        <h2 className="text-xl font-medium">Bookings</h2>
      </ProfileLayout>
    </HomeLayout>
  );
};

export default Bookings;
