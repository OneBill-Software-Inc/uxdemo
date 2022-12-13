import React, { Children } from 'react'
import styled from 'styled-components';

export const Stack = styled.div`
 display: flex;
`;
export const VStack = styled.div`
 display: flex;
 flex-direction: column ;
`;

export default function Box({ children, className }) {
    return (
            <Stack className={className}>
                {children}
            </Stack>
    )
}
