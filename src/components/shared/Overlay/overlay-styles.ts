import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledOverlay = styled(motion.div)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    inset: 0;
    
`