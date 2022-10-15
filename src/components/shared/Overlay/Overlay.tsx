import { AnimatePresence } from "framer-motion";
import { StyledOverlay } from "./overlay-styles";
import { fade_in_out } from "global/animation";

interface IProps {
  handleReset: Function;
  open: boolean;
}

const Overlay = ({ handleReset, open }: IProps) => {
  return (
    <AnimatePresence>
      {open && (
        <StyledOverlay
          variants={fade_in_out}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => handleReset()}
        />
      )}
    </AnimatePresence>
  );
};

export default Overlay;
