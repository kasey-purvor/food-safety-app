import PageContainer from "@/components/pageContainer";
import EstablishmentContainer from "@/components/establishmentContainer";
import { data } from "autoprefixer";
import { useState, useEffect, useCallback, useRef } from "react";
import Head from "next/head";

if (process.env.NEXT_PUBLIC_DEV === "true") {
    var frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
} else {
    var frontendUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
export async function getServerSideProps() {
    const { pagesNeeded, totalRecords } = await findCount();
    console.log(`Get Static Props: Pages needed: ${pagesNeeded}`);
    return {
        props: {
            pagesNeeded,
            totalRecords,
        },
    };
}

export default function LevelFour({ pagesNeeded, totalRecords }) {
    const [retailerData, setRetailerData] = useState([]);
    // const [HTML, setHTML] = useState(undefined);
    const [percentageLoaded, setPercentageLoaded] = useState(0);
    const [totalRecordCount, setTotalRecordCount] = useState(totalRecords);
    const currentPage = useRef(1); // useRef creates a variable that is mutable but is kept when the page rerenders, it is therefore good for managing loops and state

    const getBusinessData = useCallback(async () => {
        // here the useCallBack makes the function effectively not remakable. Rather than recreate the function on each rerender the function is cached
        try {
            console.log(currentPage);
            if (currentPage.current <= pagesNeeded) {
                console.log("For Loop Says: currentPage.current pre = ", currentPage.current);
                let initResponse = await fetch(handleUrl(currentPage.current));
                let parsedRes = await initResponse.json();
                let establishmentDetails = parsedRes.FHRSEstablishment.EstablishmentCollection.EstablishmentDetail;
                let establishmentDetailsDesired = generateRelevantData(establishmentDetails);
                // console.log(establishmentDetailsDesired);
                currentPage.current++;
                console.log("For Loop says: currentPage.current post= ", currentPage.current);
                if (currentPage.current === 1) {
                    await setRetailerData(() => {
                        let newData = establishmentDetailsDesired;
                        sortByDate(newData);
                        return newData;
                    });
                } else {
                    await setRetailerData((current) => {
                        let newData = current.concat(establishmentDetailsDesired);
                        sortByDate(newData);
                        // console.log(newData);
                        return newData;
                    });
                }
            }
        } catch (e) {
            console.log(e);
        }
    }, [pagesNeeded]); // this dependancy makes the function only get called when the pagesNeeded changes, which it wont so the function should not re-run each rerender. However as state is changed within it still does.
    let loadingBar = (
        <>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700">Pages Loaded - 5000 Establishments per</span>
                <span className="text-sm font-medium text-blue-700">
                    Pages: {`${currentPage.current - 1} / ${pagesNeeded}`}
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${((currentPage.current - 1) / pagesNeeded) * 100}%` }}
                ></div>
            </div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700">Records Loaded</span>
                <span className="text-sm font-medium text-blue-700">
                    Records: {`${retailerData.length} / ${totalRecordCount}`}
                </span>
            </div>
        </>
    );
    let returnHTML = retailerData.map((retailer) => {
        return (
            <EstablishmentContainer
                key={retailer.FHRSID}
                establishmentObject={retailer}
            />
        );
    });
    useEffect(() => {
        if (currentPage.current <= pagesNeeded) {
            getBusinessData();
        }
    }, [retailerData, getBusinessData, pagesNeeded]);
    return (
        <div>
            <Head>
                <title>Lvl 4 Takeaways & Sandwich Shops </title>
            </Head>
            <PageContainer>
                <div className="w-4/5">
                    <p className="text-3xl font-bold  text-blue-700"> Level 4: Takeaways & Sandwich Shops</p>
                    <p className="text-2xl font-bold  text-blue-600">
                        {currentPage.current > pagesNeeded ||
                            "Please wait until loading has finished. The results do not arrive in date order and are sorted by your browser upon completion."}
                    </p>
                    <br />
                    {loadingBar}
                </div>
                {returnHTML}
            </PageContainer>
        </div>
    );
}

function sortByDate(array) {
    array.sort(function (a, b) {
        let c = new Date(a.RatingDate);
        let d = new Date(b.RatingDate);
        return d - c;
    });
}
function generateRelevantData(dataArray) {
    let relevantDataArray = [];
    dataArray.forEach((establishment) => {
        relevantDataArray.push({
            BusinessName: establishment.BusinessName,
            AddressLineOne: establishment.AddressLine1,
            AddressLineTwo: establishment.AddressLine2,
            PostCode: establishment.PostCode,
            Rating: establishment.RatingValue,
            RatingDate: establishment.RatingDate,
            Id: establishment.FHRSID,
        });
    });
    return relevantDataArray;
}
function handleUrl(page, establishmentType) {
    const url = `${frontendUrl}/api/enhanced-search/en-GB/%5e/%5e/alpha/7844/%5e/Equal4/1/${page}/5000/json`;
    console.log(url);
    return url;
}
const findCount = async () => {
    try {
        const initResponse = await fetch(handleUrl(1));
        const parsedRes = await initResponse.json();
        const totalRecords = parsedRes.FHRSEstablishment.Header.ItemCount;
        const pagesNeeded = Math.ceil(totalRecords / 5000);
        console.log(`Total Records: ${totalRecords}. pages needed: ${pagesNeeded}`);
        return { pagesNeeded, totalRecords };
    } catch (e) {
        console.log(e);
    }
};
