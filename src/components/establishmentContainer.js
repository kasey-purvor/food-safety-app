export default function EstablishmentContainer({ establishmentObject }) {
    return (
        <div className="p-4 m-1 max-h-auto min-w-3/4  bg-blue-400 hover:bg-blue-700  sm:max-w-3xl sm:w-3/4 md:w-1/2  rounded-3xl">
            <p>Business Name: {establishmentObject.BusinessName}</p>
            <p>Address Line 1: {establishmentObject.AddressLine1}</p>
            <p>Address Line 2: {establishmentObject.AddressLine2}</p>
            <p>Post Code: {establishmentObject.PostCode}</p>
            <p>Rating: {establishmentObject.Rating}</p>
            <p>Rating Date: {establishmentObject.RatingDate}</p>
            <div className="  border p-1 border-black rounded">
                Contact Made? :    
                <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    className="w-4 h-4 px-4 mx-4 py-1  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    for="bordered-checkbox-1"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                </label>
            </div>
        </div>
    );
}
