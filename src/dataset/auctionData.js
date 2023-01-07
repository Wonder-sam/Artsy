import auction2 from './../assets/images/auction2.jpg'
import auction3 from './../assets/images/auction3.jpg'
import outbox from './../assets/images/outbox.jpg'
import falling from './../assets/images/falling.jpg'
import live from './../assets/images/live.jpg'

export const auctionData = [
    {
        id: 0,
        image: live,
        start: "2022-06-12T05:40:33",
        end: "2022-06-12T08:40:44",
        currBid: 4500
    },
    {
        id: 1,
        image: auction2,
        start: "2022-06-12T05:40:33",
        end: "2022-06-12T08:40:44",
        currBid: 3600
    },
    {
        id: 2,
        image: auction3,
        start: "2022-06-12T05:40:33",
        end: "2022-06-12T08:40:44",
        currBid: 2000
    }
]

export let topBids =[
    {
        id: 0,
        name: "Out of the box",
        creator: "Dan Murray",
        image: outbox,
        date: "12/08/22",
        highBid: 0.57,
        currBid: 0.987,
        liked: true,
    },
    {
        id: 1,
        name: "Falling apart",
        creator: "Jacob Banks",
        image: falling,
        date: "12/08/22",
        highBid: 0.34,
        currBid: 0.99,
        liked: false,
    }
]