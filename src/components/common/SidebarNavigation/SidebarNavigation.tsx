import "./SidebarNavigation.scss";
import { Padding } from "../../ui/universal/PaddingWrapper";
import { useSidebarNavigationLogic } from "./useSidebarNavigationLogic";

const SidebarNavigationComponent = () => {
  const { SidebarNavigationList } = useSidebarNavigationLogic();
  return (
    <div className="SidebarNavigation_wrapper no_select">
      <Padding horizontal={3}>{SidebarNavigationList}</Padding>
    </div>
  );
};

export const SidebarNavigation = SidebarNavigationComponent;
