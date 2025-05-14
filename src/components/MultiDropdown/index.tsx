import styles from "./styles.module.scss";
import { useState } from "react";
import DropdownList from "./DropdownList";

function MultiDropdown() {
  const items = ["item1", "item2"];
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="multi-dropdown">
      <div className="dropdown-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>+</button>
      </div>
      <DropdownList items={items} />
    </div>
  );
}

export default MultiDropdown;
