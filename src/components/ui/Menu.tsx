import MenuItem from "./MenuItem"; // Assuming MenuItem is in a separate file

interface MenuItemProps {
  name: string;
  description?: string; // Description is optional
  imageUrl?: string; // Image URL is optional
}

interface MenuList {
  items: MenuItemProps[];
}

export default function Menu(menuList: MenuList) {
  return (
    <div>
      <ul className="grid grid-cols-3">
        {menuList.items.map((item, index) => (
          <li key={index}>
            <MenuItem
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
