import React from "react"
import formatCurrency from "../util/formatCurrency"
import { useCart } from "../context/CartContext"
import itemImage from "./itemImage"

export default function CartItem({ entry }) {
  const { removeFromCart } = useCart()

  function removeItem() {
    removeFromCart(entry.itemId)
  }
  var item=entry.item;
  return (
    <div className="mb-6">
      <div className="block relative h-24 rounded overflow-hidden">
        {itemImage({item})}
        <button
          onClick={removeItem}
          className="absolute top-0 right-0 bg-black rounded-tr text-white w-6 h-6 text-lg flex justify-center items-center"
        >
          &times;
        </button>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center title-font">
          <h2 className="text-gray-900 text-lg font-medium">
            {entry.item.name}
          </h2>
          {entry.quantity > 1 && (
            <span className="text-gray-600 text-sm font-bold ml-1">
              x{entry.quantity}
            </span>
          )}
        </div>
        <div>
          {formatCurrency(entry.item.price * entry.quantity)}
        </div>
      </div>
    </div>
  )
}
