import React from 'react'
import { FaGithubSquare, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
]

export const social = [
   {
    id: 1,
    url: 'https://www.linkedin.com/in/muhammad-yaqoob-1a7122100/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/YaqoobAslam',
    icon: <FaGithubSquare />,
  },
  {
    id: 3,
    url: 'https://www.facebook.com/yaqoob.aslam.92m',
    icon: <FaFacebook />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
] 