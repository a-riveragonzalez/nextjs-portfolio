const navPaths = [
  {
    name: "Home",
    path: "#home",
    icon: "/assets/icons/house.svg",
    alt: "house",
    translate: "-46px"
  },
  {
    name: "Projects",
    path: "#projects",
    icon: "/assets/icons/code.png",
    alt: "laptop with code symbol",
    translate: "-62px"
  },
  {
    name: "About",
    path: "#about",
    icon: "/assets/icons/user.png",
    alt: "user",
    translate: "-50px"
  },
  {
    name: "Resume",
    path: "#resume",
    icon: "/assets/icons/document.png",
    alt: "document",
    translate: "-64px"
  },
  {
    name: "Contact",
    path: "#contact",
    icon: "/assets/icons/mail.png",
    alt: "envelop",
    translate: "-60px"
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="mt-3">
        {navPaths.map((item, index) => (
          <li key={index} className="mb-3 ">
            <a href={item.path} className={`flex items-center transition-transform transform translate-x-[${item.translate}] hover:translate-x-0 hover:ml-3`}>
              {item.name}
              <img src={item.icon} alt={item.alt} className="ml-2" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
