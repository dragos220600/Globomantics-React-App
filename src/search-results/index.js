import SearchResultRow from "/search-result-row";
import {useParams} from "react-router-dom";
import { useContext } from "react";
import HouseContext from "../context/houseContext";


const SearchResult = () => {
    const {country} = useParams();
    const allHouses = useContext(HouseContext); 
    const filteresHouses = allHouses.filter((h) => h.country === country);

    return (
        <div className="mt-2">
            <h4>Result for: {country}</h4>
            <table className="table table-hover">
                <tbody>
                    {filteresHouses.map((h) => (
                        <SearchResultRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};