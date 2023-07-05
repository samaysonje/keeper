import React from "react";


const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Footer(){
    return (
        <footer className="footer">
            <p>Copyright {currentYear} © samaysonje pvt ltd.</p>
        </footer>
    )
}