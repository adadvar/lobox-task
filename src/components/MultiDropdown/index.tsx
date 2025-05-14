import styles from "./styles.module.scss";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import DropdownList from "./DropdownList";

function MultiDropdown() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string>("");

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

  const toggleItemSelection = (item: string) => {
    setSelectedItem((prev) => (prev === item ? "" : item));
  };

  return (
    <div className={`${styles.multiDropdown} ${isOpen ? styles.open : ""}`}>
      <div className={styles.dropdownInput}>
        <input
          type="text"
          value={inputValue || selectedItem}
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
      {isOpen && (
        <DropdownList
          items={items}
          selectedItem={selectedItem}
          onToggle={toggleItemSelection}
        />
      )}
    </div>
  );
}

export default MultiDropdown;
