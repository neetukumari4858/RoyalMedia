import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    username: 'Neetu',
    lastName: 'Kumari',
    
    password: 'neetu123',
    bio: 'I am fresher in web Developement',
    link: 'https://candid-paletas-8107fc.netlify.app/index.html',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODPqk7Q74WjEwsgk_HqwvLnrUrWDc0txOS4Xm7qrDkQbRLBSR306nPO9UUf-cZTlArKc&usqp=CAU',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: 'Elden',
    lastName: 'Driss',

    password: 'Elden123',
    bio: 'I am fresher in web Developement',
    link: 'https://candid-paletas-8107fc.netlify.app/index.html',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWVc-BF0qq6kvN-SSbczyvLIrl4vbdbnr5JwG6nNqDa0SjpGBAwdlvcSXm5t6nlx4mdQ&usqp=CAU',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),

    username: 'Anurag',
    lastName: 'Jain  ',

    password: 'Anurag123',

    bio: 'I am fresher in web Developement',
    link: 'https://candid-paletas-8107fc.netlify.app/index.html',
    profile:
      'https://media.istockphoto.com/photos/portrait-of-a-happy-latin-american-boy-smiling-picture-id1271410473?k=20&m=1271410473&s=170667a&w=0&h=Y-w3AL1AeAGyqC-D4gDDhUVRTyouBx3useTA_FYU5wA=',
    createdAt: 2025,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: 'Jopesh',
    lastName: 'Dim',

    password: 'Jopesh123',

    bio: 'I am fresher in web Developement',
    link: 'https://candid-paletas-8107fc.netlify.app/index.html',
    profile:
      'https://www.kindpng.com/picc/m/168-1684606_circle-headshot-girl-hd-png-download.png',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: 'John',
    lastName: 'Devin',

    password: 'John123',
    bio: 'I am fresher in web Developement',
    link: 'https://candid-paletas-8107fc.netlify.app/index.html',
    profile:
      'https://thumbs.dreamstime.com/z/cute-young-boy-smiling-21381704.jpg',
    createdAt: 2022,
    updatedAt: formatDate(),
  },
]
