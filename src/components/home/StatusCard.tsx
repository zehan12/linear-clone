import { FC } from "react";
import { TrendingUp } from 'lucide-react';


interface StatusCard {
    status: string;
    message: string;
    date: string;
    className: string;
}

const StatusCard: FC<StatusCard> = ({ status, message, date, className }) => {
    const statusColors: any = {
        "On track": "text-green-500",
        "At risk": "text-yellow-500",
        "Off track": "text-red-500",
    };

    return (
        <div
            className={`bg-neutral-800 border-[1px] border-gray-700 bg-opacity-60 backdrop-blur-md rounded-xl p-4 shadow-lg ${className}`}
        >
            <div className={`flex items-center font-semibold ${statusColors[status]}`}>
                <TrendingUp className="p-1 border-[1px] border-gray-600 rounded-full mr-2" />
                {status}
            </div>
            <div className="text-white mt-2 drop-shadow-2xl">{message}</div>
            <div className="text-gray-400 mt-4">{date}</div>
        </div>
    );
};

export default StatusCard;
