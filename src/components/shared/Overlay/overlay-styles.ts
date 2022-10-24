import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledOverlay = styled(motion.div)<{ zIndex: string }>`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: ${props => props.zIndex};
    background-color: rgba(0, 0, 0, 0.5);
    inset: 0;
    
`