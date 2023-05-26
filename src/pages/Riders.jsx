import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Ridertable from "../components/Table/Ridertable";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";
import { riderdata } from "../components/Data/Riderdata";
import AvailableRiderTable from "../components/Table/AvailableRiderTable";

const Riders = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setSearchResults(riderdata);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [riderdata]);

  const handleSearch = (e) => {
    const filteredData = riderdata.filter(
      (data) =>
        data.RiderName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderId.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderNo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <>
      <div>
        <Layout>
          <SideNav></SideNav>
          <div className="absolute pt-14 flex  left-[23vw]  ">
            <div className="flex   lg:gap-[30vw]  w-full ">
              <div className="flex gap-4  ">
                <NavLink
                  to="/riders/available"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Available
                </NavLink>
                <NavLink
                  to="/riders/active"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Active
                </NavLink>
              </div>
              <div className="  pl-14">
                <Search className={"w-[20vw] h-12"} onChange={handleSearch} />
              </div>
            </div>
          </div>
          <Layout2 loading={isLoading}>
            <AvailableRiderTable dataArray={searchResults} />
          </Layout2>
        </Layout>
      </div>
    </>
  );
};

export default Riders;
