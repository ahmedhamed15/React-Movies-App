import React, {useContext, useEffect} from 'react'
import Show from '../Components/Shows/Show'
import ShowsList from '../Components/Shows/ShowsList';
import { ShowsContext } from '../../Context/ShowsContext';

const ShowPage = () => {
    const {activeShow} = useContext(ShowsContext);
    useEffect(() => {
    }, [activeShow])
    return (
        <div>
            <Show />
            <ShowsList />
        </div>
    )
}
export default ShowPage;