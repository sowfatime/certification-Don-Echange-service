import { inject } from "@angular/core"

import { Router } from "@angular/router";

// Guard pour l'admin 
export const AuthGuardAdmin = () =>{
    // const auth = inject(AuthService);
    const router = inject(Router);

    // L'administrateur connecté
    const authAdminAccept = JSON.parse(localStorage.getItem("isAdmin") || "");

    if(!authAdminAccept){
        router.navigateByUrl('/login')
        return false;
    } 

    return true;
}

// Guard pour l'utilisateur 
export const AuthGuardUser =() =>{
    const router = inject(Router);

    // L'utilisateur connecté 
    const authUserAccept = JSON.parse(localStorage.getItem("isUser") || "");
    if(!authUserAccept){
        router.navigateByUrl('/login')
        return false;
    } 

    return true;
}