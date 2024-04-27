import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import { CChart } from '@coreui/react-chartjs';

export default function Index() 
{
    const [loading, setLoading] = useState(false);    

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + 'get/collection/list/');
        const answer = await response.json();
        

        setLoading(false);
    }, []);

    useEffect(
        () => {
            fetchTable()
        }, [fetchTable]
    );

    return (
        <>
            
        </>
    )
}