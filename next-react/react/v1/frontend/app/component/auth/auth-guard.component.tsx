"use client"
import { AuthService } from 'app/zynerator/security/Auth.service';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
type AuthGuardProps = {
    children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
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
        return <>{children}</>;
    }
    if (isTokenValid == false) {
        router.push("/auth")

        return (
            <div>
       </div>
        
        )
    }


    return  <>{children}</>
};
export default AuthGuard
