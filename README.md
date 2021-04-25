# Revue API Client

## Getting Started

    yarn add gatsby-source-revue

## Setting Up

```ts
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-revue",
      options: {
        token: process.env.REVUE_TOKEN,
      },
    },
  ],
};
```

## Querying

```ts
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query RevueIssues {
    allRevueIssue {
      nodes {
        title
        html
        sent_at
        description
        url
        active
      }
    }
  }
`;
```

## Hiring

Uplift is hiring! Work on fun projects with us! [Apply](https://www.uplift.ltd/careers/)
