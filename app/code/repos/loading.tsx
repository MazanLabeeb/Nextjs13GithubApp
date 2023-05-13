"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';

export default function CircularIndeterminate() {
    return (
        <>
            <h1 className="text-2xl my-4">Public Github Repos</h1>
            <Box className="flex gap-4 flex-col items-center justify-center">
                {[0, 1, 2, 3, 4].map((item: number) => {
                    return <Skeleton key={item} variant="rounded" width={384} height={80} />
                })}
            </Box>
        </>
    );
}