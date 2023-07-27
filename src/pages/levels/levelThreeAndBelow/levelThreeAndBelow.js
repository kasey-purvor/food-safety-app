import PageContainer from "@/components/pageContainer";
import EstablishmentContainer from "@/components/establishmentContainer";
import Head from "next/head";
import Link from "next/link";

export default function LevelThreeAndBelow({ pagesNeeded, totalRecords }) {
    return (
        <div>
            <Head>
                <title>Level Three & Below | Food Safety App </title>
            </Head>
            <PageContainer>
                <div>
                <p className="text-3xl font-bold  text-blue-700"> Level 3 & Below Establishments</p>
                <br/>
                    <div className="flex justify-between mb-1">
                        <Link
                            className="bg-blue-400 hover:bg-blue-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelThreeAndBelow/cafesResCanteens"
                        >
                            Cafe`s Restaurants & Canteens
                        </Link>
                        <Link
                            className="bg-blue-400 hover:bg-blue-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelThreeAndBelow/barsClubsPubs"
                        >
                            Bars, Clubs & Pubs 
                        </Link>
                        <Link
                            className="bg-blue-400 hover:bg-blue-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelThreeAndBelow/takeawaysSandwich"
                        >
                            Takeaways & Sandwich shops
                        </Link>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}
