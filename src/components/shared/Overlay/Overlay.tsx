import { AnimatePresence } from "framer-motion";
import { StyledOverlay } from "./overlay-styles";
import { fade_in_out } from "global/animation";

interface IProps {
  handleReset: Function;
  open: boolean;
  zIndex: string;
  children?: React.ReactNode;
  type?: string;
}

const Overlay = ({ handleReset, open, zIndex, children, type }: IProps) => {
  return (
    <AnimatePresence>
      {open && (
        <StyledOverlay
          className={type}
          zIndex={zIndex}
          variants={fade_in_out}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => handleReset()}
        >
          {children}
        </StyledOverlay>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
