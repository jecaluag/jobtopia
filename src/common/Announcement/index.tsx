import cx from "classix";

export interface AnnouncementProps {
  isLink?: boolean;
}

const Announcement = ({ isLink = true }: AnnouncementProps): JSX.Element => {
  const Element = isLink ? "a" : "div";

  return (
    <Element
      className={cx(
        "mb-4 flex items-center gap-2 md:mb-10",
        isLink && "cursor-pointer hover:opacity-80"
      )}
      {...(isLink && { target: "_blank", href: "#" })}
    >
      <span className="rounded-md bg-secondary px-[6px] text-sm font-medium md:text-base">
        New
      </span>
      <span className="text-base font-bold text-slate-50 md:text-[18px]">
        Announcement: Website officially launched
      </span>
    </Element>
  );
};

export default Announcement;
