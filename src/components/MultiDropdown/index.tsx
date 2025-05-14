import styles from "./styles.module.scss";
import { useState } from "react";
import DropdownList from "./DropdownList";

function MultiDropdown() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleAddItem = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      inputValue.trim() &&
      !items.includes(inputValue.trim())
    ) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
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
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>+</button>
      </div>
      {isOpen && <DropdownList items={items} />}
    </div>
  );
}

export default MultiDropdown;
