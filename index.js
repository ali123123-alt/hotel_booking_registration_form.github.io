// JavaScript code for calculating costs and balance
const form = document.getElementById("booking-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const roomRate = {
        "Delux Room": 2500,
        "Suite Room": 4000
    };

    const amenitiesRate = {
        "AC": 1000,
        "Locker": 300
    };

    const customerName = document.getElementById("customer-name").value;
    const checkInDate = document.getElementById("check-in-date").value;
    const totalDays = parseInt(document.getElementById("total-days").value);
    const totalPersons = parseInt(document.getElementById("total-persons").value);
    const roomType = document.getElementById("room-type").value;
    const amenities = Array.from(document.getElementById("amenities").selectedOptions).map(option => option.value);
    const advanceAmount = parseInt(document.getElementById("advance-amount").value);

    const totalRoomCost = roomRate[roomType] * totalDays;
    const totalAmenitiesCost = amenities.reduce((total, amenity) => total + amenitiesRate[amenity] * totalDays, 0);
    const totalCost = totalRoomCost + totalAmenitiesCost;

    const balance = totalCost - advanceAmount;

    document.getElementById("total-room-cost").textContent = totalRoomCost;
    document.getElementById("total-amenities-cost").textContent = totalAmenitiesCost;
    document.getElementById("total-cost").textContent = totalCost;
    document.getElementById("balance").textContent = balance;

    // You can now submit this data to your preferred hosting provider for further processing.
});