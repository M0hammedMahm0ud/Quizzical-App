export default function Categories(props) {
  return props.categories.map((item, index) => (
    <option key={index} value={item.category}>
      {item.category}
    </option>
  ));
}
