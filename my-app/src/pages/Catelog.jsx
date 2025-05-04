import { useState } from "react";
import Event from "../components/Event";
import CheckoutModal from "../components/CheckoutModal";
const Catelog = () => {
    const placeholders = [
        {
            id: 1,
            image: "placeholder.jpg",
            title: "Placeholder1",
            description: "This is the description",
            price: 5,
            location: "Boston",
            startDate: "5/3/2025",
            startTime: "5:30am",
            endTime: "6:30am",
            longerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            image: "placeholder.jpg",
            title: "Placeholder2",
            description: "This is the description",
            price: 32,
            location: "St. Louis",
            startDate: "5/23/2025",
            startTime: "5:30am",
            endTime: "6:30am",
            longerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            image: "placeholder.jpg",
            title: "Placeholder3",
            description: "This is the description",
            price: 59,
            location: "Los Angeles",
            startDate: "5/12/2025",
            startTime: "5:30am",
            endTime: "6:30am",
            longerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]

    const [selectedEventIds, setSelectedEventsIds] = useState([])
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false)

    const toggleEventInCart = (id) => {
        for (const selectedEventId of selectedEventIds) {
            if (selectedEventId === id) {
                setSelectedEventsIds(selectedEventIds.filter(selectedEventId => selectedEventId !== id))
                return
            }
        }
        setSelectedEventsIds((prev) => [...prev, id])
    }

    return (
        <div>
            {openCheckoutModal && <CheckoutModal 
                events={placeholders}
                selectedEventIds={selectedEventIds}
                toggleEventInCart={toggleEventInCart}
                setOpenCheckoutModal={setOpenCheckoutModal}
            />}
            <img
                className="fixed top-0 right-0 m-4 z-50"
                src="/shopping-cart.png"
                width={50}
                alt="Shopping Cart"
                onClick={() => setOpenCheckoutModal(true)}
            />
            <div className="flex flex-col m-10">
                {placeholders.map((event, index) => (
                    <Event
                        key={index}
                        id={event.id}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                        price={event.price}
                        location={event.location}
                        startDate={event.startDate}
                        startTime={event.startTime}
                        endTime={event.endTime}
                        longerDescription={event.longerDescription}
                        selectedEventIds={selectedEventIds}
                        toggleEventInCart={toggleEventInCart}
                    />
                ))}
            </div> 
        </div>
    )
}

export default Catelog;
