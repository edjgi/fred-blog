/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      <p>
        <b>
          Fred{" "}
          <a
            href="https://www.instagram.com/fredlynam/"
            rel="noreferrer"
            target="_blank"
          >
            @fredlynam
          </a>
        </b>
        <br />
        Pathfinder travels around the United States of America. Loves David
        Sedaris, General Gordon, Anthony Trollope and Ed.
      </p>
    </div>
  )
}

export default Bio
