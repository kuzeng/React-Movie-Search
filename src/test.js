import React from 'react';

export default function SearchMovies() {
    return (
        <form className="form">
            <label htmlFor="query" className="label">
                <input
                    type="text"
                    name="query"
                    placeholder="Search Movies"
                />
                <button type="submit" className="button">submit</button>
            </label>
        </form>
    )
}