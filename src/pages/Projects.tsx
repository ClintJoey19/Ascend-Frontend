import PagePagination from "@/components/global/PagePagination";
import Banner from "@/components/projects/Banner";
import PropertiesGrid from "@/components/projects/PropertiesGrid";
import SearchFilterForm from "@/components/projects/SearchFilterForm";
import HomeLayout from "@/layouts/HomeLayout";

const Projects = () => {
  return (
    <HomeLayout>
      <div className="mt-8 flex flex-col gap-8 p-4">
        <Banner />
        <SearchFilterForm />
        <PropertiesGrid />
        <PagePagination />
      </div>
    </HomeLayout>
  );
};

export default Projects;
