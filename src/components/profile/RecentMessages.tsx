import { Link } from "react-router-dom";

const RecentMessages = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <h3 className="text-lg font-medium">Recent Messages</h3>
        <Link
          to="/profile/messages"
          className="underline hover:text-primary transition-colors"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default RecentMessages;
