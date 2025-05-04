import { useLocation, useNavigate } from 'react-router-dom';

const EventPage = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const image = state?.image
    const title = state?.title
    const price = state?.price
    const eventLocation = state?.location
    const startDate = state?.startDate
    const startTime = state?.startTime
    const endTime = state?.endTime
    const longerDescription = state?.longerDescription

    return (
        <div className="flex flex-col m-10">
            <button
                className="border my-5 w-20"
                onClick={() => navigate("/")}
            >
                Back
            </button>
            <img src={`/${image}`} width={200} alt="Event" />
            <div className="mt-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-xl mt-2">${price}</p>
                <div className="flex gap-4 mt-2">
                    <p>{eventLocation}</p>
                    <p>{startDate}</p>
                    <p>{startTime} - {endTime}</p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="mt-2">{longerDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default EventPage;
