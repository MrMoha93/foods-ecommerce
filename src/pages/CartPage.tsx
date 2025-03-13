import { useCart } from "../context/CartContext";

export default function CartPage() {
  const cart = useCart();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">My cart ({cart.totalQuantity})</h1>
      <div className="flex flex-col gap-y-2 mt-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex gap-x-2">
            <div className="flex gap-x-2 bg-gray-50 rounded-lg shadow shadow-gray-200 w-64">
              <div className="p-2 bg-white rounded-lg w-20 m-0.5 grid place-items-center">
                <img src={item.imageUrl} alt={item.name} width={80} />
              </div>
              <div className="p-2 text-sm grow">
                <p className="font-medium">{item.name}</p>
                <p className="font-light text-gray-400">{item.price} kr</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => cart.remove(item)}
                    className="flex items-center justify-center h-6 w-10 text-lg text-orange-500 bg-orange-100 rounded-full"
                  >
                    -
                  </button>
                  <span className="leading-6 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => cart.add(item)}
                    className="flex items-center justify-center h-6 w-10 text-lg text-orange-500 bg-orange-100 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="grow md:flex-none grid place-items-center font-light text-gray-700 text-sm md:text-base">
              {item.price * item.quantity} kr
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
