export default function PageContainer({children}) {
    return (
        <main className=' bg-gray-900 min-h-auto  flex flex-col items-center min-py-6 px-2 sm:p-1 rounded-3xl m-20 sm:m-5 '>
            {children}
        </main>
    )
}