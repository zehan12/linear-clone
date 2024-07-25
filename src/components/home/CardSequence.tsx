import { motion } from "framer-motion";
import StatusCard from "./StatusCard";
import { cn } from "@/lib/utils";

const CardSequence = () => {
    const cards = [
        {
            status: "On track",
            message: "We are ready to launch next Thursday",
            date: "Sep 8",
        },
        {
            status: "At risk",
            message: "Progress slowed down last week because...",
            date: "Oct 3",
        },
        {
            status: "Off track",
            message: "Unexpected roadblocks forced us to take a different...",
            date: "Oct 10",
        },
    ];

    const variants = {
        initial: (custom: any) => ({
            y: custom.y,
            opacity: 0,
            rotate: custom.rotate,
        }),
        animate: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                type: "spring",
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <div className="hidden relative w-full h-64 md:flex items-center justify-center">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    custom={{
                        y: (index - 1) * 20,
                        rotate: -10 + index * 5,
                    }}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    variants={variants}
                    style={{ zIndex: cards.length - index }}
                >
                    <StatusCard
                        status={card.status}
                        message={card.message}
                        date={card.date}
                        className={cn(
                            "rotate-[-10deg]",
                            index === 2 && "mb-20",
                            index === 1 && "mt-10",
                            index === 0 && "mt-40 ml-10"
                        )}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default CardSequence;
