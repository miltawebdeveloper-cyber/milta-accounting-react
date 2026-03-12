import React from "react";
import SidebarMenu from "../sidebarMenu";

const BookkeepingSidebar = () => {
  const menuItems = [
     { label: "Overview", id: "overview" },
     { label: "Services", id: "services" },
  { label: "Advantages", id: "advantages" },
 { label: "FAQ", id: "faq" },
  ];

  const handleItemClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -80; // Offset for sticky headers if any
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <SidebarMenu
      title="Bookkeeping Menu"
      items={menuItems}
      onItemClick={(item) => handleItemClick(item.id)}
      accentColor="#ff9401"
      activeColor="#1d4230"
      bgColor="#f9fafb"
    />
  );
};

export default BookkeepingSidebar;
