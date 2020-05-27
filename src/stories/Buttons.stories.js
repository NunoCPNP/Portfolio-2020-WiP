import React from 'react'

import LinkButton from '../components/buttons/LinkButton'
import AnchorButton from '../components/buttons/AnchorButton'
import AdminButton from '../components/buttons/AdminButton'
import BlogButton from '../components/buttons/BlogButton'

export default { title: 'Buttons' }

export const Link = () => <LinkButton label="Sample Label" />

export const Admin = () => <AdminButton label="Sample" />

export const Anchor = () => <AnchorButton label="Sample" />

export const Blog = () => <BlogButton label="Sample" />
