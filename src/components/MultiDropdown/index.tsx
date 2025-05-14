import styles from "./styles.module.scss";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

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
    <div className={`${styles.multiDropdown} ${isOpen ? styles.open : ""}`}>
      <div className={styles.dropdownInput}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleAddItem}
        />
        <button
          className={styles.dropdownToggle}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <span>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
        </button>
      </div>
      {isOpen && <DropdownList items={items} />}
    </div>
  );
}

export default MultiDropdown;
