import styles from "./styles.module.scss";

import DropdownItem from "./DropdownItem";

function DropdownList({
  items,
  selectedItem,
  onToggle,
}: {
  items: string[];
  selectedItem: string;
  onToggle: (item: string) => void;
}) {
  return (
    <ul className={styles.dropdownList} role="listbox">
      {items.map((item, index) => (
        <DropdownItem
          item={item}
          key={index}
          selectedItem={selectedItem}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default DropdownList;
