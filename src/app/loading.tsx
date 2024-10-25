export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <h3>Loading...</h3>
    </div>
  );
}
