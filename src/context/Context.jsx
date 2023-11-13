import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Datacontext = createContext(null);

const Context = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
const [orders, setOrders] = useState([])
const[loading, setLoading] = useState(true)
const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {

      if (token) {
        try {
          await axios
            .get("https://instaport-api.vercel.app/order/orders", {
              headers: {
                Authorization: `${token}`,
              },
            })
            .then((res) => {
              if (location.pathname === "/login" || location.pathname === "/") {
                setTimeout(() => {
                  navigate("/dashboard");
                }, 200);

                // setUserLoading(false)
              } else {
                return;
              }
            });
        } catch (error) {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    try {
      axios("https://instaport-api.vercel.app/order/orders", {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: ` ${token}`,
        },
      })
        .then((res) => {
          // setorderdata(res?.data?.order);

          setOrders(res?.data?.order)

          setLoading(false)
        })
    } catch (error) {
      console.log(error);
    }

    // const timeout = setTimeout(() => {
    //   setLoading(false);
    // }, 500);

    // return () => {
    //   clearTimeout(timeout);
    // };
  }, []);



  return <Datacontext.Provider value={{orders, loading}}>{children}</Datacontext.Provider>;
};

const ContextAuth = () => {
  return useContext(Datacontext);
};

export { Context, ContextAuth };
