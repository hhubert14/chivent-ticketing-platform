const CheckoutModal = ({
    events,
    selectedEventIds,
    toggleEventInCart,
    setOpenCheckoutModal,
}) => {
    return (
        <div
            className="fixed inset-10 z-50 bg-gray-100 p-10 overflow-y-scroll border"
        >
            <button
                className="border my-5 w-20"
                onClick={() => setOpenCheckoutModal(false)}
            >
                Back
            </button>
            {!selectedEventIds.length && <h1>No events selected</h1>}
            {events.map((event) => (
                selectedEventIds.includes(event.id) ?
                <div className="border p-3">
                    <h1>{event.title}</h1>
                    <p>${event.price}</p>
                    <button
                        className="border"
                        onClick={() => toggleEventInCart(event.id)}
                    >
                        Remove from cart
                    </button>
                </div> : null
            ))}
        </div>
    )
}

export default CheckoutModal;
