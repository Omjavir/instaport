import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import OrderTable from "../components/Table/OrderTable";
// import orderdata from "../components/Data/Orderdata";
import Search from "../components/Search";
import { useState } from "react";
import { useEffect } from "react";
import Buttons from "../components/Buttons";
import axios from "axios";
import { ContextAuth } from "../context/Context";
import { useLocation, useSearchParams } from "react-router-dom";

const Orders = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showOrders, setShowOrders] = useState([]);
  const [activeButton, setActiveButton] = useState("proccessing");
  // const [isLoading, setLoading] = useState(true);
  const { orders, loading } = ContextAuth() || {};

  const router = useLocation();
  const [serachParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(router.search);

    handleFilter(params.get("query"));
  }, [router, orders]);
  const handleFilter = (e) => {
    setActiveButton(e);

    if (e) {
      const data = orders?.filter((order) => {
        return order.status === e;
      });
      // setShowOrders(data);
      setSearchResults(data);
    }
  };

  // const handleSearch = (e) => {

  //   const filteredData = orders?.filter(
  //     (data) =>
  //       data?.customer.fullname?.toLowerCase().includes(
  //         e?.target?.value?.toLowerCase()
  //       ) ||
  //       data?.PackageType?.toLowerCase()?.includes(e?.target.value?.toLowerCase()) ||
  //       data?.Date?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
  //       data?.CustomerNo?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
  //       data?._id?.toLowerCase().includes(e.target.value?.toLowerCase())

  //   );
  //   // setShowOrders(filteredData);
  //   setSearchResults(filteredData);
  // };
  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      
        const filteredData = orders?.filter(
          
          (data) => data?.status.toLowerCase().includes(serachParams.get("query")) &&
          (
        data?.customer?.fullname?.toLowerCase().includes(
          e?.target?.value?.toLowerCase()
        ) ||
        data?.customer?.mobileno?.toLowerCase().includes(
          e?.target?.value?.toLowerCase()
        ) ||
        data?.delivery_type?.toLowerCase()?.includes(e?.target.value?.toLowerCase()) ||
        
        
        data?._id?.toLowerCase().includes(e.target.value?.toLowerCase())

        ));
        // setShowOrders(filteredData);
        setSearchResults(filteredData);
  
    } else {
      const filteredData = orders?.filter((data) =>
        data?.status.toLowerCase().includes(serachParams.get("query"))
      );
      setSearchResults(filteredData);
    }
  };
  const getButtonClass = (buttonId) => {
    return buttonId === activeButton
      ? "text-black  bg-yellow-400 "
      : "bg-white";
  };

  return (
    <div>
      <Layout>
        <div className="flex pl-5">

          <SideNav className={'w-[20vw]'} />

          <div className="pt-10 flex    justify-between w-[79vw] px-7 ">

            <Buttons
              className={`rounded-lg px-4 py-2 mr-2 w-[10vw] text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "new"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "new" });
              }}
              buttonText={"New"}
            />
            <Buttons
              className={`rounded-lg px-4 py-2 w-[10vw] mr-2 text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "processing"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "processing" });
              }}
              buttonText={"Processing"}
            />
            {/* <Buttons
              className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "progress"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "progress" });
              }}
              buttonText={"Progress"}
            /> */}
            {/* 
            <Buttons
              className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "progress"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "progress" });
              }}
              buttonText={"Progress"}
            />
            <Buttons
              className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "assigned"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "assigned" });
              }}
              buttonText={"Assigned"}
            />
            <Buttons
              className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "outforpickup"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "outforpickup" });
              }}
              buttonText={"Out For Pickup"}
            />
            <Buttons
              className={`rounded-lg px-4 py-2 mr-2  text-center border-2 text-base font-semibold w-fit border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "outfordelivery"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "outfordelivery" });
              }}
              buttonText={"Out For Delivery"}
            /> */}

            <Buttons
              className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold  border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  w-[10vw] ${getButtonClass(
                "delivered"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "delivered" });
              }}
              buttonText={"Delivered"}
            />
            <Buttons
              className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                "cancelled"
              )}`}
              onclick={() => {

                setSearchParams({ ["query"]: "cancelled" });
              }}
              buttonText={"Cancelled"}
            />


            <Search onChange={handleSearch} className={"w-[20vw] h-12"} />

          </div>
        </div>
        <Layout2 loading={loading}>
          <OrderTable dataArray={searchResults} />
        </Layout2>
      </Layout>
    </div>
  );
};

export default Orders;
