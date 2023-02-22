import React, { useState } from "react";
import { Badge } from "src/common";
import { sampleTags, tagColorClassNames } from "../constants";

const Tags = () => {
  const [tags, setTags] = useState(sampleTags);

  return (
    <ul className="mt-3 flex w-full flex-nowrap overflow-x-auto pb-2 sm:pb-0">
      {tags.map((tag) => (
        <Badge
          key={tag.id}
          className={`${
            tagColorClassNames[tag.type] || ""
          } m-1 mr-1 text-sm sm:m-0 sm:mr-3 sm:text-base`}
          style={{ flex: "0 0 auto" }}
          onClose={() => setTags((prev) => prev.filter((t) => t.id !== tag.id))}
        >
          {tag.name}
        </Badge>
      ))}
    </ul>
  );
};

export default Tags;
