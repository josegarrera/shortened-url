import React from 'react'

const Page = ({ id, shortUrl }) => {
    return (
        <div>
            <span>
                {id} - {shortUrl}
            </span>
            <br />
        </div>
    );
};

export default Page;