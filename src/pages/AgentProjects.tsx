import CreateProject from "@/components/profile/projects/CreateProject";
import { ProjectsTable } from "@/components/profile/projects/ProjectsTable";
import ProfileLayout from "@/layouts/ProfileLayout";

const AgentProjects = () => {
  return (
    <ProfileLayout>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-xl font-medium">My Projects</h2>
          <CreateProject />
        </div>
        <ProjectsTable />
      </div>
    </ProfileLayout>
  );
};

export default AgentProjects;
