'use client'
import { useEffect, useState } from "react";
import authenticationApi from '@/utils/authentication'
export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isAuthentication, setIsAuthentication] = useState(false);
    useEffect(() => {
        authenticationApi.setupAuthentication()
        console.log(authenticationApi.getToken());
    }, [])

    return (
        <div>defautl layout {children}</div>
    )
}