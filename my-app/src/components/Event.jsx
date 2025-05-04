import { useNavigate } from "react-router-dom";

const Event = ({
    id,
    image,
    title,
    description,
    price,
    location,
    startDate,
    startTime,
    endTime,
    longerDescription,
    selectedEventIds,
    toggleEventInCart,
}) => {
    const navigate = useNavigate()
    return (
        <div className="flex border p-3">
            <img src={`/${image}`} width={200} alt="Event" />
            <div className="flex flex-col p-3">
                <h1 className="text-lg">{title}</h1>
                <h2>{description}</h2>
                <p>${price}</p>
                <div className="flex justify-between gap-10">
                    <p>{location}</p>
                    <p>{startDate}</p>
                    <p>{startTime} - {endTime}</p>
                </div>
                <div className="flex gap-5">
                    <button
                        className="border"
                        onClick={() => toggleEventInCart(id)}
                    >
                        {selectedEventIds.includes(id) ? "Remove from cart" : "Add to cart"}
                    </button>
                    <button
                        className="border"
                        onClick={() => navigate("/event", {state: {
                            image: image,
                            title: title,
                            price: price,
                            location: location,
                            startDate: startDate,
                            startTime: startTime,
                            endTime: endTime,
                            longerDescription: longerDescription,
                        }})}
                    >
                        Explore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Event;
