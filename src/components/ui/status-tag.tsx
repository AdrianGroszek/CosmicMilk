type StatusTagProps = {
  status: "new" | "sale";
  absolute?: boolean;
};

export default function StatusTag({ status, absolute = true }: StatusTagProps) {
  return (
    <span
      className={`${absolute ? "absolute" : "relative"} z-[2] rounded-lg bg-gold p-1 px-2 text-sm font-bold text-navybluedark sm:text-base ${status === "new" ? "bg-gold" : "bg-redlight"}`}
    >
      {status === "new" ? "NEW" : "SALE"}
    </span>
  );
}
