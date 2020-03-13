import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image: FC = () => {
  const data = useStaticQuery<GatsbyTypes.AstronautImageQuery>(graphql`
    query AstronautImage {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)

  if (!data.placeholderImage?.childImageSharp)
    throw new Error('Image "gatsby-astronaut.png" cannot be found')

  // let normalizedProps = {}
  // if (
  //   data.placeholderImage.childImageSharp.fluid &&
  //   data.placeholderImage.childImageSharp.fluid.presentationWidth
  // ) {
  //   normalizedProps = {
  //     imgStyle: {
  //       maxWidth: data.placeholderImage.childImageSharp.fluid.presentationWidth,
  //       maxHeight: data.placeholderImage.childImageSharp.fluid.presentationHeight,
  //       margin: '0 auto'
  //     }
  //   }
  // }

  // return <Img {...data.placeholderImage.childImageSharp} {...normalizedProps} />
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
