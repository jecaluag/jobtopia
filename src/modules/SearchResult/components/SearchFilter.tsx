import React, { useMemo, useState } from "react";
import type { Item } from "src/common/Dropdown";
import { Dropdown } from "src/common/Dropdown";
import { FILTERS } from "../constants";

const SearchFilter = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<Item>(FILTERS[0] as Item);

  const buttonTitle = useMemo(() => selectedItem.title, [selectedItem]);

  return (
    <div className="inline-flex items-center gap-3">
      <p className="font-medium text-gray-50">Sort by:</p>
      <Dropdown
        buttonTitle={buttonTitle}
        items={FILTERS}
        selectedId={selectedItem?.id}
        onClickItem={(item) => setSelectedItem(item)}
      />
    </div>
  );
};

export default SearchFilter;
