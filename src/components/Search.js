import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { actionTypes } from '../reducer'
import './Search.css'
import { useStateValue } from '../StateProvider';


function Search({ hideButtons = false }) {

    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    }


    return (
        <form className='search'>
            <div class='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon /></div>

            {!hideButtons ? <div className='search__buttons'>
                <Button onClick={search} variant='outlined' type="submit">Google Search</Button>
                <Button variant='outlined'>I'm Felling Lucky</Button>
            </div> : <div className='search__buttons'>
                <Button className='search_buttonHidden' onClick={search} variant='outlined'>Google Search</Button>
                <Button className='search_buttonHidden' variant='outlined'>I'm Felling Lucky</Button>
            </div>}
        </form>
    )
}

export default Search