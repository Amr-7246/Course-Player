"use client";
import React, { useEffect } from "react";
import ExamPopUp from "./ExamPopUp";
import AskQPopUp from "./AskQPopUp";
import PdfPopUp from "./PdfPopUp";
import LeaderBoardPopUp from "./LeaderBoardPopUp";
import useStore from "../../context/useStore";

const PopUpTemplate = () => {
// *  ################# Start State
    const { state, dispatch } = useStore();
    const { IsOppend, WhichOppend } = state;
// *  ################# End State
// *  ################# Start Logic 
    // & Disable scrolling when popup is open
        useEffect(() => {
            if (IsOppend) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return () => {
                document.body.style.overflow = "";
            };
        }, [IsOppend]);
    // & Disable scrolling when popup is open
    // & Select Target PopUp
        if (!IsOppend) return null;
            let PopupComponent = null;
        if (WhichOppend.trim().toLowerCase() === "exam" || WhichOppend.trim().toLowerCase() === "exame") {
            PopupComponent = <ExamPopUp />;
        } else if (WhichOppend.trim().toLowerCase() === "askq") {
            PopupComponent = <AskQPopUp />;
        } else if (WhichOppend.trim().toLowerCase() === "pdf") {
            PopupComponent = <PdfPopUp />;
        } else if (WhichOppend.trim().toLowerCase() === "leaderboard") {
            PopupComponent = <LeaderBoardPopUp onClose={function (): void {
                throw new Error("Function not implemented.");
            }}/>;
        }
    // & Select Target PopUp
// * ################# End Logic 
return (
    <div className="fixed min-h-screen inset-0 z-50 flex items-center justify-center bg-stone-800 bg-opacity-90 transition-opacity duration-500">
        {PopupComponent}
    </div>
);
};

export default PopUpTemplate;
