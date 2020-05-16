import { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'

const apiEndpoint: any = process.env.REACT_APP_PRISMIC_URL
const accessToken: any = process.env.REACT_APP_PRISMIC_KEY

const Client: any = Prismic.client(apiEndpoint, { accessToken })

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await Client.query(Prismic.Predicates.at('document.type', 'projects'))

      if (response) {
        setProjects(response.results)
      }
    }
    fetchProjects()
  }, [])

  return projects
}
