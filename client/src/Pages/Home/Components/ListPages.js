import React from 'react'
import Page from './Page';

const ListPages = ({ pages }) => {
    return (
        <div>
            {
                pages && pages.map(page => (
                    <Page key={page.id} {...page} />
                ))
            }
        </div>
    )
}

export default ListPages
