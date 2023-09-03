const navPaths = [
  {
    name: "Home",
    path: "#home",
    icon: "/assets/icons/house.svg",
    alt: "house",
  },
  {
    name: "Projects",
    path: "#projects",
    icon: "/assets/icons/code.png",
    alt: "laptop with code symbol",
  },
  {
    name: "About",
    path: "#about",
    icon: "/assets/icons/user.png",
    alt: "user",
  },
  {
    name: "Resume",
    path: "#resume",
    icon: "/assets/icons/document.png",
    alt: "document",
  },
  {
    name: "Contact",
    path: "#contact",
    icon: "/assets/icons/mail.png",
    alt: "envelop",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="mt-3 ml-3">
        {navPaths.map((item, index) => (
          <li key={index} className="mb-3 ">
            <a href={item.path} className="flex items-center">
              {item.name}
              <img src={item.icon} alt={item.alt} className="ml-2" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
