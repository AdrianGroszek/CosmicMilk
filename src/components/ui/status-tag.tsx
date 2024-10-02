type StatusTagProps = {
  status: "new" | "sale";
};

export default function StatusTag({ status }: StatusTagProps) {
  return (
    <span
      className={`absolute ml-2 mt-2 rounded-lg bg-gold px-2 text-navybluedark ${status === "new" ? "bg-gold" : "bg-redlight"}`}
    >
      {status === "new" ? "NEW" : "SALE"}
    </span>
  );
}
