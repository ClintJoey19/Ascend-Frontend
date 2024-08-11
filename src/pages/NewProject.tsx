import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectAddressForm from "@/components/profile/projects/forms/ProjectAddressForm";
import ProjectCategoryForm from "@/components/profile/projects/forms/ProjectCategoryForm";
import ProjectDescriptionForm from "@/components/profile/projects/forms/ProjectDescriptionForm";
import ProjectFeatureForm from "@/components/profile/projects/forms/ProjectFeaturesForm";
import ProjectNameForm from "@/components/profile/projects/forms/ProjectNameForm";
import ProjectOtherInfoForm from "@/components/profile/projects/forms/ProjectOtherInfoForm";
import ProjectPriceForm from "@/components/profile/projects/forms/ProjectPriceForm";
import { Button } from "@/components/ui/button";
import ProfileLayout from "@/layouts/ProfileLayout";
import apiRequest from "@/lib/apiRequest";
import toast from "react-hot-toast";

export type ProjectType = "Buy" | "Rent";
export type PropertyType = "House" | "Apartment" | "Condo unit";
export type Parking = "Indoor" | "Outdoor";

export type Project = {
  id: string;
  name: string;
  isPublished: boolean;
  description?: string;
  price?: number;
  location?: string;
  latitude?: number;
  longitude?: number;
  type?: ProjectType;
  propertyType?: PropertyType;
  bedroom?: number;
  bathroom?: number;
  parking?: Parking;
  area?: number;
  constructed?: string;
  features?: string[];
  agentId?: string;
};

const NewProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await apiRequest.get(`/agent-projects/${projectId}`);

        if (!res) throw new Error("Error fetching project");

        setProject(res.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchProject();
  }, [project]);

  const progress = [
    project?.name,
    project?.description,
    project?.type,
    project?.bathroom,
    project?.bedroom,
    project?.location,
    project?.latitude,
    project?.longitude,
    project?.area,
    project?.features,
  ];

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      const res = await apiRequest.put(`/agent-projects/${project?.id}`, {
        ...project,
        isPublished: !project?.isPublished,
      });

      if (!res) throw new Error("There was an error publishing the project");

      setProject(res.data);
      toast.success(
        project?.isPublished ? "Project unpublished" : "Project published"
      );
    } catch (error: any) {
      console.error(error.message);
      toast.error("There was an error publishing the project");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <ProfileLayout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-xl font-medium truncate">
              Project <span className="text-slate-500">{projectId}</span>
            </h2>
            <Button
              size="sm"
              onClick={handlePublish}
              disabled={isPublishing}
              variant={project?.isPublished ? "default" : "outline"}
            >
              {project?.isPublished ? "Unpublished" : "Publish"}
            </Button>
          </div>
          <p className="text-sm">Completed: 1/7</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <ProjectNameForm project={project} setProject={setProject} />
            <ProjectDescriptionForm project={project} setProject={setProject} />
            <ProjectCategoryForm project={project} setProject={setProject} />
            <ProjectOtherInfoForm project={project} setProject={setProject} />
          </div>
          <div className="flex flex-col gap-2">
            <ProjectPriceForm project={project} setProject={setProject} />
            <ProjectAddressForm address={project?.location} />
            <ProjectFeatureForm features={project?.features} />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default NewProject;
