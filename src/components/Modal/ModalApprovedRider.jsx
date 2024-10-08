import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Buttons";
import InputComp from "../InputComp";
import './ModalAnimation.css'
import { CSSTransition } from "react-transition-group";

const ModalApprovedRider = ({ setmodal, datamodal }) => {
  const [showModal, setShowModal] = useState(false);

  // Open the modal when `datamodal` prop changes
  useEffect(() => {
    setShowModal(true);
  }, [datamodal]);

  // Close the modal when `showModal` state changes
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setmodal({ show: false });
    }, 300); // Wait for the closing animation to complete (300ms)
  };


  return (
    <>
       <CSSTransition
        in={showModal}
        classNames="modal"
        timeout={300}
        unmountOnExit
      >
        <div className="h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed left-0 top-0 z-[100]">
          <div className="relative h-[70vh] overflow-y-hidden w-[45vw] bg-[#FFFDE6]  rounded-lg flex flex-col ">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 font-bold text-xl text-red-600"
            >
              <AiOutlineClose />
            </button>

          <div className="p-5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <InputComp value={datamodal?.RiderId} label={"Rider ID:"} />
              <InputComp
                value={datamodal?.RiderVehicleNo}
                label={"Rider Vehicle No:"}
              />
              <InputComp value={datamodal?.RiderName} label={"Rider Name:"} />
              <InputComp
                value={datamodal?.RiderVehicleType}
                label={"Vehicle Type:"}
              />
              <InputComp value={datamodal?.RiderNo} label={"Rider No:"} />

              <InputComp
                value={datamodal?.RiderAadharNumber}
                label={"Aadhar No:"}
              />
              <InputComp value={datamodal?.RiderPanCard} label={"Pan No:"} />

              <InputComp
                value={datamodal?.RiderAddress}
                label={" Rider Address: "}
              />
            </div>

            <div className="flex flex-col w-[100%] gap-y-3 pt-3 items-center">
              <div className="flex gap-x-10">
                <Button
                  buttonText={"Block Rider"}
                  className={
                    "text-white border-yellow-300 self-center bg-yellow-400 px-3 h-10 w-[12rem] py-0.5 rounded-3xl"
                  }
                ></Button>

                <Button
                  buttonText={"Suspend Rider"}
                  className={
                    "text-white border-yellow-300 self-center bg-yellow-400 px-3 h-10 py-0.5 w-[12rem] rounded-3xl"
                  }
                ></Button>
              </div>
              <Button
                buttonText={"Amount to be paid to instaport - Rs 32323"}
                className={
                  "text-white border-yellow-300 self-center bg-yellow-400 px-3 h-10 py-0.5 rounded-3xl"
                }
              ></Button>
            </div>

            {/* <div className="grid grid-cols-2 gap-y-2 pt-4 pl-4 pr-9 ">
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Rider ID - </p>
                <p> {datamodal?.RiderId}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Rider Vehicle No. - </p>
                <p> {datamodal?.RiderVehicleNo}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Rider Name - </p>
                <p> {datamodal?.RiderName}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Vehicle Type - </p>
                <p> {datamodal?.RiderVehicleType}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Rider No. - </p>
                <p> {datamodal?.RiderNo}</p>
              </div>
            </div>

            <div className="flex justify-start gap-x-10  w-full pt-4 pl-4">
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Aadhar No. - </p>
                <p className="">{datamodal?.RiderAadharNumber}</p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <p className="font-semibold">Pan No. - </p>
                <p className="">{datamodal?.RiderPanCard}</p>
              </div>
              <div></div>
            </div>

            <div className="flex w-[100%] justify-center pt-4">
              <p className="font-semibold">1. Address - </p>
              <p>{datamodal?.RiderAddress}</p>
            </div>

            <div className="flex flex-col w-[100%] gap-y-8 pt-4 items-center">
              <div className="flex gap-x-12">
              <Button
                buttonText={"Block Rider"}
                className={
                  "text-white border-yellow-300 self-center bg-yellow-400 px-4 h-11 w-[13rem] py-0.5 rounded-3xl"
                }>

              </Button>

              <Button
                buttonText={"Suspend Rider"}
                className={
                  "text-white border-yellow-300 self-center bg-yellow-400 px-4 h-11 py-0.5 w-[13rem] rounded-3xl"
                }>

              </Button>
              </div>
              <Button
                buttonText={"Amounr to be paid to instaport - Rs 32323"}
                className={
                  "text-white border-yellow-300 self-center bg-yellow-400 px-4 h-11 py-0.5 rounded-3xl"
                }>

              </Button>
            </div> 
            
            */}
          </div>
        </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalApprovedRider;
