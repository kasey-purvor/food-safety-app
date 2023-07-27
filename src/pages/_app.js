import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import PageContainer from "@/components/pageContainer";

export default function App({ Component, pageProps }) {
    return (
        <div className="bg-gray-300">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}
