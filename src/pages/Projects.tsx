import PagePagination from "@/components/global/PagePagination";
import Banner from "@/components/projects/Banner";
import PropertiesGrid from "@/components/projects/PropertiesGrid";
import SearchFilterForm from "@/components/projects/SearchFilterForm";

const Projects = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 p-4">
      <Banner />
      <SearchFilterForm />
      <PropertiesGrid />
      <PagePagination />
    </div>
  );
};

export default Projects;
