import React, {FC} from "react";
import {isMobile} from "react-device-detect";

export const ScrollToTop: FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return isMobile ? (
        <div
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                backgroundColor: "#55cd96",
                cursor: "pointer",
                zIndex: "9999",
                borderRadius: "50%",
                border: "1px solid #55cd96",
                width: "50px",
                height: "50px",
                textAlign: "center"
            }}
        >
            <i style={{
                border: "solid #ffffff",
                borderWidth: "0 5px 5px 0",
                display: "inline-block",
                padding: "5px",
                marginTop: "20px",
                transform: "rotate(-135deg)"
            }}/>
        </div>
    ) : null
}