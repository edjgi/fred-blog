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
          Millie{" "}
          <a
            href="https://www.instagram.com/milliedrewfood/"
            rel="noreferrer"
            target="_blank"
          >
            @milliedrewfood
          </a>
        </b>
        <br />
        Grace Dent I’m coming for your job. I’m NOT a chef, but I think my binge
        watching of Kitchen Nightmares should be considered professional in its
        own right.
      </p>
    </div>
  )
}

export default Bio
