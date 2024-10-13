export default function CartProductItem() {
  return (
    <li className="flex gap-2 rounded-md bg-navybluedark p-2 font-cosmic">
      <div className="flex h-[130px] w-[130px] shrink-0 rounded-md bg-navybluelight">
        IMG
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="font-bold">
          <span>Icy Milk from Lactarius-7</span>
          <span> (500ml)</span>
        </div>
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="flex items-center gap-4 text-textdark">
            <span>QUANTITY</span>
            <div>
              <button className="w-6 rounded-full border border-textdark hover:border-white hover:text-white">
                -
              </button>
              <span className="inline-block w-8 text-center">2</span>
              <button className="w-6 rounded-full border border-textdark hover:border-white hover:text-white">
                +
              </button>
            </div>
          </div>
          <span className="font-bold">$59.99</span>
        </div>
      </div>
    </li>
  );
}
