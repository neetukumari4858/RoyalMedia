import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Neetu',
    lastName: 'Kumari',
    username: 'Neetu',
    password: 'neetu123',
    bio: 'I am fresher in web developement',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODPqk7Q74WjEwsgk_HqwvLnrUrWDc0txOS4Xm7qrDkQbRLBSR306nPO9UUf-cZTlArKc&usqp=CAU',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Elden',
    lastName: 'Driss',
    username: 'Elden',
    password: 'Elden123',
    bio: 'I am fresher in web developement',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://png.pngitem.com/pimgs/s/570-5706525_tiffanie-circle-headshot-2018-blond-hd-png-download.png',
    createdAt: 2022,
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: 'Charless',
    lastName: 'Dr',
    username: 'Charless',
    password: 'Charless123',
    bio: 'I am fresher in web developement',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://www.kindpng.com/picc/m/168-1684606_circle-headshot-girl-hd-png-download.png',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Johan',
    lastName: 'Devin',
    username: 'Johan',
    password: 'Charless123',
    bio: 'I am fresher in web developement',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://thumbs.dreamstime.com/z/cute-young-boy-smiling-21381704.jpg',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Anurag',
    lastName: 'Jain  ',
    username: 'Anurag',
    password: 'Charless123',
    bio: 'I am fresher in web developement',
    link: 'https://adarshbalika.netlify.app/',
    profile:
      'https://media.istockphoto.com/photos/portrait-of-a-happy-latin-american-boy-smiling-picture-id1271410473?k=20&m=1271410473&s=170667a&w=0&h=Y-w3AL1AeAGyqC-D4gDDhUVRTyouBx3useTA_FYU5wA=',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
]
