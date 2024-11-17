import React, { ReactNode } from "react";
import { SnackbarProvider } from "notistack";

interface SnackbarProps {
  children: ReactNode;
}

const Snackbar: React.FC<SnackbarProps> = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={1} autoHideDuration={3000} variant="success">
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;
