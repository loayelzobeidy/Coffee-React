import MenuItem from "./MenuItem";
import { MenuList } from "../../types/MenuList";

export default function Menu(menuList: MenuList) {
  return (
    <div>
      <ul className="grid grid-cols-3">
        {menuList.items.map((item, index) => (
          <li key={index}>
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
