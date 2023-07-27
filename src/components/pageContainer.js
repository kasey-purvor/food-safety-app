export default function PageContainer({children}) {
    return (
        <main className=' bg-gray-800 h-full  flex flex-col items-center py-2 px-2 rounded-3xl m-20 sm:m-5'>
            {children}
        </main>
    )
}