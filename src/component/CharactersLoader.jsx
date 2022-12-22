import React from 'react'
import ContentLoader from 'react-content-loader'
export const CharactersLoader =({borderRadius = 20,...props})  => (
    <ContentLoader viewBox="0 26 400 475" height={400} width={300} {...props}>
    <circle cx="20" cy="455" r="20" />
    <rect x="0" y="410" rx="4" ry="4" width="200" height="20" />
    <rect x="45" y="445" rx="4" ry="4" width="80" height="15" />
    <rect x="0" y="0" rx={borderRadius} ry={borderRadius} width="650" height="400" />
  </ContentLoader>
)
export const CharactersImageLoader = ({borderRadius = 20,...props})  => (
  <ContentLoader viewBox="0 26 400 475" height={400} width={300} {...props}>
  <rect x="0" y="0" rx={borderRadius} ry={borderRadius} width="650" height="400" />
</ContentLoader>
)