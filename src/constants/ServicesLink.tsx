import { BsBuildings } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBlackBook, GiBulldozer } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { PiShovelBold } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { TbBuildingChurch } from "react-icons/tb";

export const ServicesLink = [
  // {
  //   icons: "",
  //   title: "",
  // },
  {
    link: "/commercialconstruction",
    icons: BsBuildings,
    title: " Commercial Construction",
  },
  {
    link: "/residentialconstruction",
    icons: IoHomeOutline,
    title: "   Residential Construction",
  },
  {
    link: "/preconstruction",
    icons: GiBlackBook,
    title: "     Pre-Construction",
  },

  {
    link: "/sitemanagement",
    icons: FaUserAstronaut,
    title: "  Site Management",
  },
  {
    link: "/specialprojects",
    icons: TbBuildingChurch,
    title: " Special Projects",
  },
  {
    link: "/infrastructureconstruction",
    icons: GiBulldozer,
    title: "     Infrastructure Construction",
  },
  {
    link: "/civilengineering",
    icons: SlSettings,
    title: "      Civil Engineering",
  },
  {
    link: "/landscapeconstruction",
    icons: PiShovelBold,
    title: "   Landscape Construction",
  },
  {
    link: "/landscapeconstruction",
    icons: PiShovelBold,
    title: "   Landscape Construction",
  },
];
