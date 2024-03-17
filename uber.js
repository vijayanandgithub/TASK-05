class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const fareWithoutBookingFee = this.baseFare + (this.costPerMinute * durationInMinutes) + (this.costPerMile * distanceInMiles);
        const totalFare = fareWithoutBookingFee + this.bookingFee;
        return totalFare;
    }
}


const uberXCalculator = new UberPriceCalculator(5, 4, 10, 20);
const distance = 10; // in miles
const duration = 20; // in minutes
const totalPrice = uberXCalculator.calculatePrice(distance, duration);
console.log("Total price for the UberX ride:", totalPrice);

