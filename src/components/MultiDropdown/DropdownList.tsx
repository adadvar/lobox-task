import DropdownItem from "./DropdownItem";

function DropdownList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <DropdownItem item={item} key={index} />
      ))}
    </ul>
  );
}

export default DropdownList;
