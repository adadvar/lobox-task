import DropdownItem from "./DropdownItem";

function DropdownList({ items }: { items: string[] }) {
  return (
    <ul className="dropdown-list">
      {items.map((item, index) => (
        <DropdownItem item={item} key={index} />
      ))}
    </ul>
  );
}

export default DropdownList;
