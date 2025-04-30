import React, { JSX } from "react";
import { foot } from "./Classes/globals";

export default function Footer(): JSX.Element {
    return (
        <div className="footer" style={{ textAlign: "center", marginTop: "2rem", color: "#888" }}>
            {foot}
        </div>
    );
}
