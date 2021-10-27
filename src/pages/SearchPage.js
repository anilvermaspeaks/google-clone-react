import React from 'react'
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Search from '../components/Search'

import { Link } from 'react-router-dom';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to="/">
                    <img height={40} src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png' alt='' />

                </Link>
                <Search hideButtons />
            </div>

            <div className='searchPage_results'>
                {data && <div><div>About
                    {data.searchInformation.formattedTotalResults} results </div>
                    {data?.items?.map((item) => <div>{item.displayLink}</div>)}
                </div>
                }
            </div>
        </div>
    )
}


export default SearchPage;