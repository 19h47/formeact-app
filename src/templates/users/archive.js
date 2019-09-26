import React from "react"
import Layout from "../../components/Layout"
import HeaderArchive from "../../components/HeaderArchive"
import Seo from "../../components/Seo"

const AuthorArchive = props => {
  const { pageContext: { name } } = props
  return (
    <Layout classNames="archive">
      <Seo
        title={`Author - ${name}`}
        description={`A collection of posts written by ${name}.`}
      />
      <HeaderArchive name={name} />
    </Layout>
  )
}

export default AuthorArchive
