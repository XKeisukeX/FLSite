export default function Topbar() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
     if (hours < 12) {
        timeOfDay = "Morning";
     } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
     } else {
        timeOfDay = "Evening";
     }
    return (
        <div className="bg-primary">
            <div className="py-1.5 px-4 text-center text-white">
                <h4 className="text-sm font-bold capitalize">Good {timeOfDay} to you!</h4>
            </div>
        </div>
    )
}