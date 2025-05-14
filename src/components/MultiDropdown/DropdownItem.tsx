import styles from "./styles.module.scss";
import { BsCheck2 } from "react-icons/bs";

function DropdownItem({
  item,
  selectedItem,
  onToggle,
}: {
  item: string;
  selectedItem: string;
  onToggle: (item: string) => void;
}) {
  return (
    <li
      className={`${styles.dropdownItem} ${
        selectedItem === item ? styles.selected : ""
      }`}
      onClick={() => onToggle(item)}
      role="option"
      aria-selected={selectedItem === item}
      tabIndex={0}
    >
      <span className={styles.title}>{item}</span>
      {selectedItem === item && (
        <span className={styles.checkIcon}>
          <BsCheck2 />
        </span>
      )}
    </li>
  );
}

export default DropdownItem;
