import MarkdownRenderer from "react-markdown-renderer";
import styles from "./homepage.module.css";
import PageContainer from "./pageContainer";
const text = `# Food Safety Sales App

### This app was built as a sales tool for a company, by request, that sells food hygiene systems to help establishments improve & maintain their score. The application allows them to target establishments with different Food Hygiene Ratings, depending on their target.  

#### There are 3 main categories: 
1. Level 5 
1. level 4 
1. Level 3 and below
#### And within each there are 3 types of establishment they wish to target: 
* Cafes, Resteraunts & Canteens
* Bars, Clubs & Pubs
* Takeaways & Sandwich shops 

### The app allows them to choose which category & subcategory and get all available data from the FHRS external API. A loading bar is provided due to the large data sets. The data is then sorted into descending date order to allow them to target the latest reviews. A checkbox is provided to allow them to know which have been contacted. 

## Tech
* Next.js / React
* Tailwind.css
* FHRS API 
## Under The Hood
#### The FHRS api allows only 5000 records sent on each request, so some extra functions were needed. When a establishment type is chosen, getStaticProps performs an initial request and get the total number of records and pages and passes them as props to the components. The page then performs the necessary number of requests, upping the page count with each. This is also how the loading bar works.


`

export default function Homepage() {


    return (
        <PageContainer>
            <main className={styles.homepage}>
                <MarkdownRenderer
                    markdown={text}
                    className="bg-orange-300 rounded-3xl p-5 max-w-3xl"
                />
            </main>
        </PageContainer>
    );
}
