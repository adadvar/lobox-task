import styles from "./styles.module.scss";
import DropdownList from "./DropdownList";

function MultiDropdown() {
  const items = ["item1", "item2"];
  return (
    <div className="multi-dropdown">
      <div className="dropdown-input">
        <input type="text" />
        <button>+</button>
      </div>
      <DropdownList items={items} />
    </div>
  );
}

export default MultiDropdown;
