import styles from "./styles.module.scss";
import DropdownList from "./DropdownList";

function MultiDropdown() {
  const items = ["item1", "item2"];
  return (
    <div className="multi-dropdown">
      <DropdownList items={items} />
    </div>
  );
}

export default MultiDropdown;
