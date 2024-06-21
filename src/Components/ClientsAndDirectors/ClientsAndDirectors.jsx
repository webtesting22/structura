import React from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
const ClientsAndDirectors = () => {
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/clientsanddirectors", name: "Clients And Directors" },
        // Add more links as needed
    ];
    const Image = "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <>
            <StructuraCommonHero
                image={Image}
                text="Directors and Clients"
                routeLinks={routeLinks}
            />
            <section id="ClientsAndDirectorsSection">
                    
            </section>
        </>
    )
}
export default ClientsAndDirectors