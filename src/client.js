import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "al1ms7km",
    dataset: "production",
    apiVersion: "2022-06-16",
    useCdn: false
})