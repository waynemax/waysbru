import React, { memo } from "react";
import { Route } from "../../../shared/definitions";
import router from "../../../router";
import { TabsMenu } from "@yandex/ui/TabsMenu/desktop/bundle";

const NavigationComponent = () => {
  const { name } = router.getState();
  return (
    <div>
      <TabsMenu
        size="m"
        view="default"
        layout="horiz"
        activeTab={name}
        tabs={[
          { id: Route.MAIN_SCREEN, onClick: () => router.navigate(Route.MAIN_SCREEN), content: "Tab 1" },
          { id: Route.SETTINGS_SCREEN, onClick: () => router.navigate(Route.SETTINGS_SCREEN), content: "Tab 2" },
        ]}
      />
    </div>
  );
};

export const Navigation = NavigationComponent;
