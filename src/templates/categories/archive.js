import React from "react"
import Layout from "@components/Layout"
import HeaderArchive from "@components/HeaderArchive"
import Seo from "@components/Seo"

const SingleCategory = props => {
  const { pageContext: { name } } = props

  return (
    <Layout classNames="archive">
      <Seo
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <HeaderArchive name={name} />
    </Layout>
  )
}

export default SingleCategory
