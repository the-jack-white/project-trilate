import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Navigation = () => {
  const links = [
    {
      name: "Projects",
      slug: "projects",
    },
    {
      name: "About",
      slug: "about",
    },
    {
      name: "Contact",
      slug: "contact",
    },
  ];
  return (
    <nav className="text-xl font-medium z-20 relative">
      <NavigationDesktop links={links} />
      <NavigationMobile />
    </nav>
  );
};

export default Navigation;
