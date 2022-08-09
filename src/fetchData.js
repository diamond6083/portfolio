import { useState, useEffect  } from 'react'
import sanityClient from './client'

const useFetch = (name) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    
    async function fetchProjectData(){
        try{
            const result = await sanityClient.fetch(
                `*[_type == "project"] | order(projectNo) {
                    title,
                    slug,
                    projectRole,
                    projectImage{
                        asset->{
                            _id,
                            url
                        }
                    }
                }`
            )
            setData(result)
        }
        catch(err){
            setError(err)
        }
    }

    async function fetchWorkData(){
        try{
            const result = await sanityClient.fetch(
                `*[_type == "work"] | order(work_no){
                    work_no,
                    work_title,
                    work_body
                }`
            )
            setData(result)
        }
        catch(err){
            setError(err)
        }
    }

    async function fetchMiscData(){
        try{
            const result = await sanityClient.fetch(
                `*[_type == "misc"]{
                    heroImg{
                        asset->{
                            _id,
                            url
                        }
                    },
                    manifestoImg{
                        asset->{
                            _id,
                            url
                        }
                    },
                    mottoImgBg{
                        asset->{
                            _id,
                            url
                        }
                    },
                    craftsManshipImg{
                        asset->{
                            _id,
                            url
                        }
                    },
                    storyImg1{
                        asset->{
                            _id,
                            url
                        }
                    },
                    storyImg2{
                        asset->{
                            _id,
                            url
                        }
                    }
                }`
            )
            setData(result)
        }
        catch(err){
            setError(err)
        }
    }

    useEffect(() => {
        if(name === 'project')
            fetchProjectData()
        else if(name === 'work')
            fetchWorkData()
        else if(name === 'misc')
            fetchMiscData()
    }, [name]);

    return {data, error}
}


export default useFetch