import PriceOption from "../PriceOption/PriceOption";
const PriceOPtions = () => {
    [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Basic fitness classes",
                "Use of cardio equipment",
                "Access to locker rooms"
            ],
            "price": "$30/month"
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Advanced fitness classes",
                "Personal trainer sessions",
                "Use of cardio and strength equipment",
                "Access to sauna and steam room"
            ],
            "price": "$50/month"
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "features": [
                "Access to gym facilities",
                "Advanced fitness classes",
                "Personal trainer sessions",
                "Access to spa and sauna",
                "Use of all gym amenities",
                "Complimentary towel service"
            ],
            "price": "$80/month"
        }
    ]

    return (
        <div>
            <h2>Best Prices in the Town.</h2>
            {
                PriceOPtions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOPtions;