"use client";
import megeMenuImage from "@/resources/megaMenu/megamenu.png";
import { useState } from "react";
const menu = [
  {
    title: "MenuItem",
    image: megeMenuImage,
    header: [
      {
        title: "Header",
        subHeader: [
          {
            title: "subHeader",
            subHeader: "subHeader",
          },
          {
            title: "subHeader",
            subHeader: "subHeader",
          },
          {
            title: "subHeader",
            subHeader: "subHeader",
          },
        ],
      },
      {
        title: "Header",
        subHeader: [
          {
            title: "subHeader",
          },
          {
            title: "subHeader",
          },
          {
            title: "subHeader",
          },
          {
            title: "subHeader",
          },
          {
            title: "subHeader",
          },
          {
            title: "subHeader",
          },
        ],
      },
    ],
  },
];

const genateMenu = (menu: any) => {};

const MegaMenu = () => {

    const [selectMenuItem, setSelectMenuItem] = useState<null | number>(null);
  const copies = new Array(10).fill(null);
  const newMenuItems = copies.map(() => JSON.parse(JSON.stringify(menu[0])));

  console.log("newMenuItems", newMenuItems);

  return (
    <div className="hidden md:flex flex-col md:pb-5">
      <div className="divider "></div>
      <div className="max-w-6xl mx-auto flex flex-row justify-between w-full ">
        {newMenuItems.map((item, index) => (
          <div className={selectMenuItem=== index ?"border-b-2 border-blue-500 ":""}  key={index}>
            <button onClick={()=> setSelectMenuItem(index)}>{item.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
