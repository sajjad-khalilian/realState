import BuyResidential from "@/components/template/BuyResidential"

async function page({searchParams}) {
    const res = await fetch("http://localhost:3000/api/profile" , {
        cache: "no-store"
    })
    const data = await res.json()

    let finalData = data.data
    if(searchParams.category){
        finalData = finalData.filter(i => i.category === searchParams.category)
    }

    return <BuyResidential data={finalData}/>
}

export default page
