import { NavItems } from "./navbar-items";
import { NavLogo } from "./navbar-logo";

export const DesktopNav = () => {
  return (
    <section className={`hidden items-start justify-between lg:flex`}>
      <div className="font-head" role="navigation">
        <NavItems isMobile={false} onItemClick={() => {}} />
      </div>
      <div className={``}>
        <NavLogo />
      </div>
    </section>
  );
};
