import style from './SearchBar.module.css';

const SearchBar = () => {

    return (
        <>
            <form>
                <label>
                    Търсене
                    <input
                    type="text"
                        autoComplete={true}
                        placeholder="София"
                        name="search"
                    />
                </label>
                <input
                    type="submit"
                    value="Намери"
                />
            </form>
        </>
    )

}

export default SearchBar;