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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
    createdAt: 2022,
    updatedAt: formatDate(),
  },
];
