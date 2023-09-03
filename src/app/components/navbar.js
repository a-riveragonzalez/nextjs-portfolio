import Image from 'next/image';

const navPaths = [
  {
    name: "Home",
    path: "#home",
    icon: "/assets/icons/house.svg",
  },
  {
    name: "Projects",
    path: "#projects",
    icon: "/assets/icons/code.png",
  },
  {
    name: "About",
    path: "#about",
    icon: "/assets/icons/user.png",
  },
  {
    name: "Resume",
    path: "#resume",
    icon: "/assets/icons/document.png",
  },
  {
    name: "Contact",
    path: "#contact",
    icon: "/assets/icons/mail.png",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navPaths.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.name}</a>
            <img src={item.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
