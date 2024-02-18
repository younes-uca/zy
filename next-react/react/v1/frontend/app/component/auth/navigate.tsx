"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AuthService } from '../../zynerator/security/Auth.service';


export const Navigate = () => {
    const authService = new AuthService();
    const [isTokenValid, setIsTokenValid] = useState<boolean | null>();
    const router = useRouter();
    
    useEffect(() => {
        const isTokenValid = authService.isUserLoggedIn();
        console.log("isTokenValid", isTokenValid);
        console.log(isTokenValid);
        setIsTokenValid(isTokenValid)
        
    }, []);

    if (isTokenValid == true) {       
        router.push("/dashboard")
    }
    return (
    <div></div>
  )
}
