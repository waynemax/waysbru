import { SidebarNavigationData } from "./SidebarNavigationData";
import { useMemo } from "react";
import { SidebarNavigationItem } from "./SidebarNavigationItem";
import { useRoute } from "react-router5";
import router from "../../../router";

export const useSidebarNavigationLogic = () => {
  const { route } = useRoute();
  const data = SidebarNavigationData;

  const SidebarNavigationList = useMemo(() => {
    return data.map(({ title, id, disabled }, key) => {
      return (
        <SidebarNavigationItem
          key={`sbni${id}_${key}`}
          title={title}
          active={route.name === id}
          onClick={() => !disabled && router.navigate(id)}
          disabled={disabled}
        />
      );
    });
  }, [route]);

  return {
    SidebarNavigationList,
    data,
  };
};
