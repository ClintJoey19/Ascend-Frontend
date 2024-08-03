import ProjectAddressForm from "@/components/profile/projects/forms/ProjectAddressForm";
import ProjectCategoryForm from "@/components/profile/projects/forms/ProjectCategoryForm";
import ProjectDescriptionForm from "@/components/profile/projects/forms/ProjectDescriptionForm";
import ProjectFeatureForm from "@/components/profile/projects/forms/ProjectFeaturesForm";
import ProjectNameForm from "@/components/profile/projects/forms/ProjectNameForm";
import ProjectOtherInfoForm from "@/components/profile/projects/forms/ProjectOtherInfoForm";
import ProjectPriceForm from "@/components/profile/projects/forms/ProjectPriceForm";
import { Button } from "@/components/ui/button";
import HomeLayout from "@/layouts/HomeLayout";
import ProfileLayout from "@/layouts/ProfileLayout";
import { useParams } from "react-router-dom";

const NewProject = () => {
  const { projectId } = useParams();
  const isPublished = false;

  const onPublish = () => {
    console.log("Published");
  };

  return (
    <HomeLayout>
      <ProfileLayout>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-4">
              <h2 className="text-xl font-medium">Project {projectId}</h2>
              {isPublished ? (
                <>
                  <Button size="sm">Unpublished</Button>
                </>
              ) : (
                <>
                  <Button size="sm" variant="outline">
                    Publish
                  </Button>
                </>
              )}
            </div>
            <p className="text-sm">Completed: 1/7</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <ProjectNameForm name="Hello World" />
              <ProjectDescriptionForm description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ab impedit a facere nisi doloribus repellat facilis modi qui amet hic sunt, quae id quisquam similique soluta maxime dignissimos ea?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ab impedit a facere nisi doloribus repellat facilis modi qui amet hic sunt, quae id quisquam similique soluta maxime dignissimos ea?" />
              <ProjectCategoryForm />
              <ProjectOtherInfoForm />
            </div>
            <div className="flex flex-col gap-2">
              <ProjectPriceForm price={100000} />
              <ProjectAddressForm address="Naga City" />
              <ProjectFeatureForm features={[]} />
            </div>
          </div>
        </div>
      </ProfileLayout>
    </HomeLayout>
  );
};

export default NewProject;
