import { BookingsTable } from "@/components/profile/bookings/BookingsTable";
import HomeLayout from "@/layouts/HomeLayout";
import ProfileLayout from "@/layouts/ProfileLayout";

export type Booking = {
  id: string;
  userId: string;
  projectId: string;
  agentId: string;
  status: "Booked" | "Success" | "Cancelled";
  bookDate: string;
};

const Bookings = () => {
  return (
    <HomeLayout>
      <ProfileLayout>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Bookings</h2>
          <BookingsTable />
        </div>
      </ProfileLayout>
    </HomeLayout>
  );
};

export default Bookings;
