import './SearchBox.css'

function SearchBox(props){
    return(
        <div className='search-container'>
            <input 
                type="text" 
                className='movie-search' 
                value={props.value} 
                onChange={(event)=>props.setSearchValue(event.target.value)}
                placeholder='...Type to search'/>
        </div>
    )
}
export default SearchBox