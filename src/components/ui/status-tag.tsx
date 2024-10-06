type StatusTagProps = {
  status: "new" | "sale";
};

export default function StatusTag({ status }: StatusTagProps) {
  return (
    <span
      className={`absolute z-[2] ml-2 mt-2 rounded-lg bg-gold px-2 text-sm text-navybluedark sm:text-base ${status === "new" ? "bg-gold" : "bg-redlight"}`}
    >
      {status === "new" ? "NEW" : "SALE"}
    </span>
  );
}
