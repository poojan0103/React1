import React, { useState } from 'react'
import { AddCountry } from "./AddCountry";
import { AppContext } from "./context";
import { ListCountry } from "./ListCountry";
import { ADD_COUNTRY } from "../constant";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Json = () => {
    const [countries, setcountries] = useState([
        {
          name: "Afghanistan",
          capital: "Kabul",
          region: "Asia",
          population: 27657145,
        },
      ]);

    const dispatchAction = (action, payload) => {
        switch (action) {
          case ADD_COUNTRY:
            setcountries([...countries, payload]);
            return;
          case "DELETE_COUNTRY":
            setcountries(
              countries.filter((country) => country.name !== payload.name)
            );
            toast.warn("DEELTED", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
    
            return;
          default:
            return;
        }
      };
      return (
        <div>
          <AppContext.Provider value={{ countries, dispatchAction }}>
            <AddCountry />
            <ListCountry />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </AppContext.Provider>
        </div>
      );
    };
