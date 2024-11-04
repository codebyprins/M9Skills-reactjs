'use client'; // This component is a client component

import { useSearchParams } from 'next/navigation';

export default function SearchParamsDisplay() {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const region = searchParams.get('region');

    return (
        <div>
            <h1>Search Parameters</h1>
            <p>Name: {name}</p>
            <p>Region: {region}</p>
        </div>
    );
}
