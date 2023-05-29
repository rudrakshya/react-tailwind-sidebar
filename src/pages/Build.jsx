import {useParams} from 'react-router-dom';

const Build = () => {
    const { aID } = useParams();
    return <h1>Build / {aID}</h1>;
};

export default Build;