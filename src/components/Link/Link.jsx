/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as RebassLink } from 'rebass'

const Link = props => <RebassLink {...props} as={GatsbyLink} />

export { Link }
