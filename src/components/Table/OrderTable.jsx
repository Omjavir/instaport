import React, { useState } from "react";
import thead from "../Data/TableheadingOrder";
// import orderdata from "../Data/Orderdata";
import Modaltest from "../Modal/ModalOrder";
import datanotfound from "../../images/datanotfound (2).svg";
const OrderTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });

  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const filteredData = data.filter(
  //   (data) =>
  //     data.CustomerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.OrderType.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.Date.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.CustomerNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.OrderId.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <>
      {modal.show && (
        <Modaltest
          datamodal={modal.show && modal?.datamodal}
          setmodal={setmodal}
        />
      )}

      <div className=" flex justify-center items-start w-full h-[80vh] overflow-y-scroll ">
        <div className="w-full">
          <table className="w-[100%]">
            <thead className=" sticky top-0 z-50 bg-white">
              <tr className=" border-b-2 border-slate-200">
                {thead.map((head, index) => (
                  <th key={index} className=" px-4 py-2 gap-2">
                    {head.tablehead}
                  </th>
                ))}
              </tr>
            </thead>

            {dataArray.length > 0 ? (
              <tbody className="text-center w-full">
                {dataArray.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() => {
                        setmodal({ show: true, datamodal: data });
                      }}
                      className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
                    >
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.OrderId}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.CustomerName}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.CustomerNo}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.PackageType}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.PickupCity}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.DropCity}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.Date}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.Time}
                      </td>
                      <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                        {data?.PaymentType}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <div className="absolute w-[100%] mt-12  bg-gray-100 px-8  ">
                <div className="flex justify-around items-center">
                  <div className="w-[40%]">
                    <img src={datanotfound} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-center  gap-y-10">
                    <span className="font-mono   text-5xl">Oop's Data</span>
                    <span className="font-mono   text-5xl">Not Found </span>
                  </div>
                </div>
              </div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
