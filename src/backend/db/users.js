import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Neetu",
    lastName: "Kumari",
    username: "Neetu",
    password: "neetu123",
    bio: "I am fresher in web developement",
    link: 'https://adarshbalika.netlify.app/',
    profile:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODPqk7Q74WjEwsgk_HqwvLnrUrWDc0txOS4Xm7qrDkQbRLBSR306nPO9UUf-cZTlArKc&usqp=CAU",
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Elden",
    lastName: "Driss",
    username: "Elden",
    password: "Elden123",
    bio: "I am fresher in web developement",
    link: 'https://adarshbalika.netlify.app/',
    profile:
    "https://png.pngitem.com/pimgs/s/570-5706525_tiffanie-circle-headshot-2018-blond-hd-png-download.png",
    createdAt: 2022,
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Charless",
    lastName: "Thomas",
    username: "Charless",
    password: "Charless123",
    bio: "I am fresher in web developement",
    link: 'https://adarshbalika.netlify.app/',
    profile:
    "https://png.pngitem.com/pimgs/s/570-5706525_tiffanie-circle-headshot-2018-blond-hd-png-download.png",
    createdAt: 2022,
    updatedAt: formatDate(),
  },
];

