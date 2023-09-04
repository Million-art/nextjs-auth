export default function userProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-8">ProfilePage</h1>
            <h2 className="text-4xl">
                profile 
                <span className="bg-orange-500 p-3 text-black">{params.id}</span>
            </h2>
        </div>
    )
    }