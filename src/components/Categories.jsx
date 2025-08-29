import { useContext } from "react";
import { categories } from "../Contexts/categoryContext";

export default function Categories() {
  const renderCats = useContext(categories);
  return renderCats.map((item, index) => (
    <option key={index} value={item.category}>
      {item.category}
    </option>
  ));
}
