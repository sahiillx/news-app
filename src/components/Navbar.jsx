import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList({ filterData = [], category, setCategory }) {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium "
      >
        {filterData.map((source) => (
          <button
            className="px-4 m-2"
            key={source.id}
            onClick={() => filterHandler(source.title)}
          >
            {source.title}
          </button>
        ))}
      </Typography>
    </ul>
  );
}

export default function NavbarSimple({ filterData, category, setCategory }) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className=" w-full px-6 py-3 border-gray-700 bg-gray-800 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <a href="main">News APP</a>
        </Typography>
        <div className="hidden lg:block">
          <NavList
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 flex items-center justify-center" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </Collapse>
    </Navbar>
  );
}
