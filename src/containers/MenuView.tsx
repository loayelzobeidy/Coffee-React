import { useSelector } from "react-redux";
import Menu from "../components/ui/Menu";
import { RootState } from "../store";

const COFFEE_LIST = [
  { name: "espresso", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "cappucino", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "cafe latte", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "espresso", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "cappucino", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "cafe latte", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "espresso", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "cappucino", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
  { name: "cafe latte", description: "A strong shot of espresso with good mix of milk", imageUrl: "https://www.shutterstock.com/shutterstock/photos/687356026/display_1500/stock-photo-cofee-cup-espresso-and-coffee-beans-with-hot-latte-art-on-wooden-background-side-view-with-copy-687356026.jpg" },
];
export default function MenuView() {
  const user = useSelector((state: RootState) => state.user.user);
  console.log("user and isAuthenticated",user)
  return <Menu items={COFFEE_LIST}></Menu>;
}
