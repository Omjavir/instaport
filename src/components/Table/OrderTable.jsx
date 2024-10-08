import React, { useState } from "react";
import thead from "../Data/TableheadingOrder";
// import orderdata from "../Data/Orderdata";
import Modaltest from "../Modal/ModalOrder";
import datanotfound from "../../images/datanotfound (2).svg";
import moment from "moment";

const OrderTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });

  

  // );
  return (
    // <>
    // ** Modal component **
    // {modal.show && (
    //   <Modaltest
    //     datamodal={modal.show && modal?.datamodal}
    //     setmodal={setmodal}
    //   />
    // )}

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

          {dataArray?.length > 0 ? (
            <tbody className="text-center w-full">
              {dataArray.map((data, index) => {
                const dateObj = new Date(data?.createdAt);

                const options = {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                };

                const formattedDateString = dateObj.toLocaleString(
                  "en-GB",
                  options
                );
                return (
                  // <a
                  //   href={`order/${data?._id}`}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  // >
                  <tr
                    key={index}
                    // ** Opens the modal **
                    // onClick={() => {
                    //   setmodal({ show: true, datamodal: data });
                    // }}
                    onClick={() => {
                      window.open(`order/${data?._id}`, '_blank', 'noopener, noreferrer');

                    }}
  
                    target="_blank"
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
                  >
                    <td className="cursor-pointer px-2 py-2  font-light">
                      #{data?._id?.slice(-5)}
                    </td>
                    <td className="cursor-pointer px-2 py-2  font-light">
                      {data?.customer?.fullname}
                    </td>
                    <td className="cursor-pointer px-2 py-2  font-light">
                      {data?.customer?.mobileno}
                    </td>
                    <td className="cursor-pointer px-2 py-2  font-light">
                      {data?.delivery_type}
                    </td>
                  
                    <td className="cursor-pointer px-2 py-2  font-light">
                      {formattedDateString}
                    </td>
                    <td className="cursor-pointer px-2 py-2  font-light">
                      {moment(data?.createdAt).format("h:mm a")}
                    </td>
                    <td className="cursor-pointer px-2 py-2  font-light">
                      {data?.payment_method}
                    </td>
                  </tr>
                  // </a>
                );
              })}
            </tbody>
          ) : (
            <div className="absolute w-[100%]  mt-12  px-8  ">
              <div className="flex justify-around h-full items-center">
                {/* <div className="flex flex-col justify-center  items-center  gap-y-10"> */}
                <span className="font-semibold  text-3xl">
                  Data not available.
                </span>
                {/* </div> */}
              </div>
            </div>
          )}
        </table>
      </div>
    </div>
    // </>
  );
};

export default OrderTable;
