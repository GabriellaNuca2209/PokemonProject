import { useEffect, useState } from "react";

export function useAiAction (turn) {

    const [aiAction, setAiAction] = useState("");

    useEffect(() => {
        if (turn === 1) {
            const allowedActions = ["attack"];
            setAiAction(allowedActions[Math.floor(Math.random() * allowedActions.length)]);
        }
    }, [turn])

    return aiAction;
}