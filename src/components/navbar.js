import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar({ isLoggedIn }) {
    const [userLogedIn, setUserLoggedIn] = useState(false);

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-screen text-sm py-4 bg-black">
            <nav
                className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <Link
                        className="flex-none text-xl font-semibold hover:bg-grey-500 hover:text-gray-700 p-2 rounded-md text-white"
                        href="/"
                    >
                        Food Safety App
                    </Link>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-600 transition-all text-sm bg-slate-900 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800"
                            data-hs-collapse="#navbar-with-collapse"
                            aria-controls="#navbar-with-collapse"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-with-collapse"
                    className="hidden basis-full grow sm:block"
                >
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <Link href="/levels/levelThreeAndBelow/levelThreeAndBelow">
                            <button className="bg-blue-400 hover:bg-blue-700  hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl">
                                Level 3 and below
                            </button>
                        </Link>

                        <Link
                            className="bg-blue-400 hover:bg-blue-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelFour/levelFour"
                            aria-current="page"
                        >
                            Level 4
                        </Link>

                        <Link
                            className="bg-blue-400 hover:bg-blue-700 hover:text-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl"
                            href="/levels/levelFive/levelFive"
                        >
                            Level 5
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
