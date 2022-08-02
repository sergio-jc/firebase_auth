import { async } from "@firebase/util";
import React from "react";
import { useAuth } from "../context/authContext";

// import {useContext} from 'react'
// import {context} from '../context/authContext'

const Home = () => {
  //  const authContext = useContext(context)
  const { user, logOut, loading } = useAuth();
  const handleLogOut = async () => {
    console.log("hola");
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <h1>LOADING...</h1>;
  }
  console.log(user);
  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4 ">
          Welcome {user.displayName || user.email}
        </h1>
        <button
          onClick={handleLogOut}
          className="bg-slate-400 hover:bg-slate-300 rounded py-2 px-4 text-black"
        >
          log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
