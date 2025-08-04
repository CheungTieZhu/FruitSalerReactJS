import React, { useState } from 'react';
import { Fruit } from '../types';
import { useCart } from '../contexts/CartContext';

interface QuantitySelectorProps {
    fruitSelect: Fruit;
    stock: number;
    initialValue?: number;
    onChange?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    fruitSelect,
    stock,
    initialValue = 1,
    onChange
}) => {
    const { addMultipleToCart } = useCart();
    const [quantity, setQuantity] = useState<number>(initialValue);

    const handleDecrease = () => {
        const newValue = Math.max(1, quantity - 1);
        setQuantity(newValue);
        onChange?.(newValue);
    };

    const handleIncrease = () => {
        const newValue = Math.min(stock, quantity + 1);
        setQuantity(newValue);
        onChange?.(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            const clampedValue = Math.max(1, Math.min(stock, value));
            setQuantity(clampedValue);
            onChange?.(clampedValue);
        } else if (e.target.value === '') {
            // 允许空值以便用户完全删除输入
            setQuantity(0);
        }
    };

    const handleBlur = () => {
        // 当输入框失去焦点时，如果值为空或0，则重置为1
        if (quantity < 1) {
            setQuantity(1);
            onChange?.(1);
        }
    };

    return (
        <div className="mt-1">
            <div className="flex items-center">
                <button
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    className={`w-10 h-10 flex items-center justify-center text-xl border border-gray-300 rounded-l-md ${quantity <= 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    -
                </button>
                <input
                    type="number"
                    min="1"
                    max={stock}
                    value={quantity === 0 ? '' : quantity}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                    onClick={handleIncrease}
                    disabled={quantity >= stock}
                    className={`w-10 h-10 flex items-center justify-center text-xl border border-gray-300 rounded-r-md ${quantity >= stock ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => addMultipleToCart(fruitSelect,quantity)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-medium transition duration-300 mt-2.5">
                加入购物车
            </button>
        </div>
    );
};

export default QuantitySelector;