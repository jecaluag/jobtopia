import cx from "classix";

interface Props {
  isLink?: boolean;
}

const Announcement = ({ isLink = true }: Props): JSX.Element => {
  const Element = isLink ? "a" : "div";

  return (
    <Element
      className={cx(
        "mb-10 flex items-center gap-2",
        isLink && "cursor-pointer hover:opacity-80"
      )}
      {...(isLink && { target: "_blank", href: "#" })}
    >
      <span className="rounded-md bg-secondary px-[6px] text-base font-medium">
        New
      </span>
      <span className="text-[18px] font-bold text-slate-50">
        Announcement: Website officially launched
      </span>
    </Element>
  );
};

export default Announcement;
