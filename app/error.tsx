"use client";

import { Button, Heading } from "@chakra-ui/react";
import { use, useEffect } from "react";


function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
    console.error(error);
}, [error]);

    return (
        <div>
            <Heading mb={4}>予期せぬエラーが発生しました。</Heading>
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    );
}

