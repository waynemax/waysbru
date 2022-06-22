import classNames from "classnames";

export const SidebarNavigationItem = ({ title, active, onClick = undefined, disabled = false}: any) => {
  const className = classNames("SidebarNavigation_item_button", {
    active,
    disabled,
  });
  return (
    <div className="SidebarNavigation_item" onClick={onClick}>
      <div className={className}>
        <span>{title}</span>
      </div>
    </div>
  );
};
