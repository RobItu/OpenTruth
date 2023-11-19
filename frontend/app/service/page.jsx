"use client";
import React, { useEffect } from "react";
require("dotenv").config();

const page = () => {
  useEffect(() => {
    async function fetchBills() {}
    fetchBills();
  }, []);
  return <div className="upper-body">page</div>;
};

export default page;
