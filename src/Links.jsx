import TRJA from './assets/images/TRJA.jpg'

export const pageLinks = [
  { id: 1, link: '#home', text: 'Home', class: 'active' },
  { id: 2, link: '#about', text: 'About' },
  { id: 3, link: '#skill', text: 'Skills' },
  { id: 4, link: '#projects', text: 'Projects' },
  { id: 5, link: '#contact', text: 'Contact' },
];

export const socialLinks = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/ianprincedumanhug/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    id: 2,
    link: 'https://www.facebook.com/ianprince.dumanhug',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    id: 3,
    link: 'https://github.com/IanPrinceD',
    icon: 'fa-brands fa-github-alt',
  },
];

export const skillLinks = [
  {
    id: 1,
    category: 'Technical Skills',
    skills: ['HTML5', 'CSS3', 'Javascript', 'PHP'],
  },
  {
    id: 2,
    category: 'Professional Skills',
    skills: [
      'Communication Skills',
      'Leadership',
      'Teamwork',
      'Time Management',
    ],
  },
];

export const projectLinks = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww',
    title: 'Neoeye Optical Clinic',
    description:
      'The project aims to create a user-friendly website for an Eye Clinic, enabling patients to easily book appointments, reserve eye products, and engage with customer service through a responsive chat system.',
    link: 'https://github.com/FurankuJosepho/NeoEyePHP',
    icon: 'fa-brands fa-github',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww',
    title: 'Byte Genius',
    description:
      'User-friendly e-commerce for computer enthusiasts. Browse products, prices, and reviews with easy online transactions. Enjoy after-sale services and chat support for assistance.',
    link: 'https://github.com/IanPrinceD/bGen',
    icon: 'fa-brands fa-github',
  },
  {
    id: 3,
    img: TRJA,
    title: 'The Red Jumpsuit Apparatus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et veritatis ratione nihil aperiam atque!',
    link: 'https://github.com/IanPrinceD/TRJA_Web',
    icon: 'fa-brands fa-github',
  },
];

export const Title = ({ firstWord, secondWord }) => {
  return (
    <>
      {firstWord} <span>{secondWord}</span>
    </>
  );
};

export const Button = ({ word, type }) => {
  return (
    <>
      <button type={type}>{word}</button>
    </>
  );
};
