import PageContainer from "@/components/pageContainer";
import EstablishmentContainer from "@/components/establishmentContainer";
import Head from "next/head";
import Link from "next/link";

export default function LevelFour({ pagesNeeded, totalRecords }) {
    return (
        <div>
            <Head>
                <title>Level Four | Food Safety App </title>
            </Head>
            <PageContainer>
                <div>
                <p className="text-3xl font-bold  text-blue-700"> Level 4 Establishments</p>
                <br/>
                    <div className="flex justify-between mb-1">
                        <Link
                            className="bg-green-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelFour/cafesResCanteens"
                        >
                            Cafe`s Restaurants & Canteens
                        </Link>
                        <Link
                            className="bg-green-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelFour/barsClubsPubs"
                        >
                            Bars, Clubs & Pubs 
                        </Link>
                        <Link
                            className="bg-green-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelFour/takeawaysSandwich"
                        >
                            Takeaways & Sandwich shops
                        </Link>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}
