import { Outlet } from "react-router-dom";
import NavbarMain from "../components/NavbarMain";
import { FormQuery } from "../components/FormQuery";
import { useFetchQuery } from "../hooks/fetchQuery";

const ContainerPage = () => {
  const { response, loading, error, fetchData } = useFetchQuery();
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex flex-col">
      <NavbarMain />
      <div className="w-1/2 bg-gray-200 py-4 pl-2">
        <FormQuery fetQuery={fetchData}/>
      </div>
      <div className="flex-1 my-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ContainerPage;
