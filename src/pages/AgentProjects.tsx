import { ProjectsTable } from "@/components/profile/projects/ProjectsTable";
import { Button } from "@/components/ui/button";
import HomeLayout from "@/layouts/HomeLayout";
import ProfileLayout from "@/layouts/ProfileLayout";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";

const AgentProjects = () => {
  return (
    <HomeLayout>
      <ProfileLayout>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-xl font-medium">My Projects</h2>
            <Button size="sm" asChild>
              <Link to="/profile/agent-projects/create">
                New Project <CirclePlus className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          <ProjectsTable />
        </div>
      </ProfileLayout>
    </HomeLayout>
  );
};

export default AgentProjects;
