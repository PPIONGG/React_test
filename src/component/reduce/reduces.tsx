import { useEffect, useState } from "react";

const ratioDetails = [
    {
      subjobNo: "NI2400504-A",
      poLineItem: "20",
      size: "S",
      quantity: 325,
    },
    {
      subjobNo: "NI2400504-A",
      poLineItem: "20",
      size: "L",
      quantity: 533,
    },
    {
      subjobNo: "NI2400504-A",
      poLineItem: "20",
      size: "2XL",
      quantity: 57,
    },
    {
      subjobNo: "NI2400504-E",
      poLineItem: "60",
      size: "S",
      quantity: 100,
    },
    {
      subjobNo: "NI2400504-E",
      poLineItem: "60",
      size: "L",
      quantity: 500,
    },
    {
      subjobNo: "NI2400504-E",
      poLineItem: "60",
      size: "2XL",
      quantity: 50,
    },
  ];

const Reduces = () => {
  useEffect(() => {
    const newData = ratioDetails.reduce((acc, curr) => {
      const { subjobNo, poLineItem, size, quantity } = curr;
      if (!acc[subjobNo]) {
        acc[subjobNo] = { subjobNo, poLineItem, [size]: quantity };
      } else {
        acc[subjobNo] = { ...acc[subjobNo], [size]: quantity };
      }
      return acc;
    }, {} as {[key:string]: any});
    const result = Object.values(newData);
    console.log("newData", newData);
    console.log(result);
  }, []);

  return (
  <div>
    Loading...
  </div>    
);
};

export default Reduces;
