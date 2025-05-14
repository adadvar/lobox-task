import styles from "./styles.module.scss";
import { useState } from "react";
import DropdownList from "./DropdownList";

function MultiDropdown() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddItem = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      inputValue.trim() &&
      !items.includes(inputValue.trim())
    ) {
      setItems([...items, inputValue.trim()]);
    }
  };

  return (
    <div className="multi-dropdown">
      <div className="dropdown-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddItem}
        />
        <button>+</button>
      </div>
      <DropdownList items={items} />
    </div>
  );
}

export default MultiDropdown;
