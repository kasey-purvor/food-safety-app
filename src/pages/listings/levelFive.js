import PageContainer from "@/components/pageContainer";
import { useState } from "react";

function handleUrl(counter) {
    const url = `https://api1-ratings.food.gov.uk//enhanced-search/en-GB/%5e/%5e/alpha/1/%5e/equal5/1/${counter}/5000/json`;
    console.log(url);
    return url;
}
const findCafeCount = async () => {
    try {
        const initResponse = await fetch(handleUrl(1));
        const parsedRes = await initResponse.json();
        const totalRecords = parsedRes.FHRSEstablishment.Header.ItemCount;
        const pagesNeeded = Math.ceil(totalRecords / 5000);
        console.log(`Total Records: ${totalRecords}. pages needed: ${pagesNeeded}`);
        return pagesNeeded;
    } catch (e) {
        console.log(e);
    }
};

export default function LevelFive() {
    const [retailerData, setRetailerData] = useState([]);
    const getBusinessData = async () => {
        try {
            const pagesNeeded = await findCafeCount();
            for (let counter = 1; counter <= pagesNeeded; counter++) {
                console.log("Counter", counter);
                let initResponse = await fetch(handleUrl(counter));
                let parsedRes = await initResponse.json();
                setRetailerData((current) =>
                    current.concat(parsedRes.FHRSEstablishment.EstablishmentCollection.EstablishmentDetail)
                );
                console.log("Retailer Data count", retailerData.length);
            }
        } catch (e) {
            console.log(e);
        }
    };
    getBusinessData();

    // try {
    //     let counter = 1;

    //     setRetailerData(current => current.concat(parsedRes.FHRSEstablishment.EstablishmentCollection.EstablishmentDetail));
    //     counter ++
    //     console.log("retailer data", retailerData)
    //     console.log(`Total Records: ${totalRecords}. pages needed: ${pagesNeeded}`);
    //     for (counter ; counter <= pagesNeeded; counter++) {
    //         console.log("Counter", counter)
    //         let initResponse = await fetch(handleUrl(counter));
    //         let parsedRes = await initResponse.json();
    //         setRetailerData(current => current.concat(parsedRes.FHRSEstablishment.EstablishmentCollection.EstablishmentDetail));
    //         console.log("Retailer Data count", retailerData.length);
    //     }
    // } catch (e) {
    //     console.log(e);
    // }


    return <PageContainer>{`${retailerData}`}</PageContainer>;
}
