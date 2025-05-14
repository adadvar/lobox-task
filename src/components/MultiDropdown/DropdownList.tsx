import styles from "./styles.module.scss";

import DropdownItem from "./DropdownItem";

function DropdownList({ items }: { items: string[] }) {
  return (
    <ul className={styles.dropdownList}>
      {items.map((item, index) => (
        <DropdownItem item={item} key={index} />
      ))}
    </ul>
  );
}

export default DropdownList;
