import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Context/CartContext";

const CartCard = ({ id, name, img, price, qty, discount, stock, lastitem }) => {
  const { dispatchCart } = useCart();
  const [QTY, setQTY] = useState(qty);
  const handleIncrease = () => {
    const newQty = Math.min(QTY + 1, stock);
    dispatchCart({ type: "UPDATE", payload: { id, qty: newQty } });
    setQTY(newQty);
  };

  const handleDecrease = () => {
    const newQty = QTY - 1;
    if (newQty <= 0) dispatchCart({ type: "REMOVE", payload: id });
    else dispatchCart({ type: "UPDATE", payload: { id, qty: newQty } });
    setQTY(newQty);
  };

  const handleRemove = () => {
    dispatchCart({ type: "REMOVE", payload: id });
  };

  const discountedPrice = price * (1 - discount / 100);
  return (
    <div
      className={`w-full flex flex-row relative ${
        !lastitem ? "border-b border-gray-800/50" : null
      }`}
    >
      <div className="size-[150px]">
        <img src={img} alt={id + name} />
      </div>
      <FontAwesomeIcon
        onClick={handleRemove}
        className="absolute right-3 top-2 text-[12px] cursor-pointer text-red-500"
        icon={faX}
      />
      <p className="absolute bottom-[70px] right-3 text-lg">
        ${(QTY * discountedPrice).toFixed(2)}
      </p>
      <div className="ml-2 pt-1 flex flex-col gap-1 pr-15">
        <p className="md:text-sm text-[12px]">{name}</p>
        <p className="text-[13px] py-2">${discountedPrice.toFixed(2)}</p>
        <div className="flex gap-3 items-center">
          <span
            onClick={handleDecrease}
            className="text-lg font-medium text-gray-500/80 cursor-pointer"
          >
            -
          </span>
          <span>{QTY}</span>
          <span
            onClick={handleIncrease}
            className="text-lg font-medium text-gray-500/80 cursor-pointer"
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
