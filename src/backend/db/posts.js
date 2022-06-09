import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      'Success is not Final,Failure is not fatal it is the courage to continue the count ',
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Neetu',
    lastName: 'Kumari',
    username: 'Neetu',
    createdAt: 2020,
    updatedAt: formatDate(),
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODPqk7Q74WjEwsgk_HqwvLnrUrWDc0txOS4Xm7qrDkQbRLBSR306nPO9UUf-cZTlArKc&usqp=CAU',
    comments: [
      {
        _id: uuid(),
        firstName: 'Charles',
        lastName: 'Dr',
        username: 'Charles',
        createdAt: 2026,
        updatedAt: formatDate(),
        profile:
          'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1619697.jpg&fm=jpg',
        commentData: 'Do hard work do not think about fruit.',
        createdAt: 2020,
        updatedAt: formatDate(),
      },
    ],
  },

  {
    _id: uuid(),
    content:
      'Keep your face always toward the sunshine, and shadows will fall behind you. ',
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Elden',
    lastName: 'Driss',
    username: 'Elden',
    createdAt: 2019,
    updatedAt: formatDate(),
    profile:
      'https://png.pngitem.com/pimgs/s/570-5706525_tiffanie-circle-headshot-2018-blond-hd-png-download.png',
    commentData: 'There is nothing impossible to they who will try.',
    comments: [
      {
        _id: uuid(),
        firstName: 'John',
        lastName: 'Devin',
        username: 'John',
        createdAt: 2019,
        updatedAt: formatDate(),
        profile:
          'https://thumbs.dreamstime.com/z/cute-young-boy-smiling-21381704.jpg',
        commentData: 'There is nothing impossible to they who will try.',
        createdAt: 2019,
        updatedAt: formatDate(),
      },
    ],
  },

  {
    _id: uuid(),
    content:
      'Life has got all those twists and turns. You’ve got to hold on tight and off you go.',
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Charles',
    lastName: 'Dr',
    username: 'Charles',
    createdAt: 2018,
    updatedAt: formatDate(),
    profile:
      'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1619697.jpg&fm=jpg',
    commentData: 'Greate things take time.',
    comments: [
      {
        _id: uuid(),
        firstName: 'Elden',
        lastName: 'Driss',
        username: 'Elden',
        createdAt: 2018,
        updatedAt: formatDate(),
        profile:
          'https://png.pngitem.com/pimgs/s/570-5706525_tiffanie-circle-headshot-2018-blond-hd-png-download.png',
        createdAt: 2018,
        updatedAt: formatDate(),
      },
    ],
  },

  {
    _id: uuid(),
    content:
      'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on',
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'Jopesh',
    lastName: 'Thomas',
    username: 'Jopesh',
    createdAt: 2018,
    updatedAt: formatDate(),
    profile:
      'https://www.kindpng.com/picc/m/168-1684606_circle-headshot-girl-hd-png-download.png',
    commentData:
      'You are never too old to set another goal or to dream a new dream',
    comments: [
      {
        _id: uuid(),
        firstName: 'Charles',
        lastName: 'Dr',
        username: 'Charles',
        createdAt: 2019,
        updatedAt: formatDate(),
        profile:
          'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1619697.jpg&fm=jpg',

        commentData:
          'You are never too old to set another goal or to dream a new dream',
        createdAt: 2018,
        updatedAt: formatDate(),
      },
    ],
  },

  {
    _id: uuid(),
    content:
      'Not having the best situation, but seeing the best in your situation is the key to happiness.',
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: 'John',
    lastName: 'Devin',
    username: 'John',
    createdAt: 2025,
    updatedAt: formatDate(),
    profile:
      'https://thumbs.dreamstime.com/z/cute-young-boy-smiling-21381704.jpg',
    commentData:
      'The bad news is time flies. The good news is you’re the pilot.',
    comments: [
      {
        _id: uuid(),
        firstName: 'Jopesh',
        lastName: 'Thomas',
        username: 'Jopesh',
        createdAt: 2018,
        updatedAt: formatDate(),
        profile:
          'https://www.kindpng.com/picc/m/168-1684606_circle-headshot-girl-hd-png-download.png',
        commentData:
          'The bad news is time flies. The good news is you’re the pilot.',
        createdAt: 2018,
        updatedAt: formatDate(),
      },
    ],
  },
]
