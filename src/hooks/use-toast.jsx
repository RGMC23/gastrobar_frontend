import * as React from "react";
import { toast as sonnerToast } from "sonner";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;
let toasts = [];

function dispatch(action) {
  switch (action.type) {
    case "ADD_TOAST":
      toasts = [action.toast, ...toasts].slice(0, TOAST_LIMIT);
      count = toasts.length;
      break;

    case "UPDATE_TOAST":
      toasts = toasts.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
      break;

    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        toasts = toasts.filter((t) => t.id !== toastId);
      } else {
        toasts = [];
      }
      count = toasts.length;
      break;
    }

    case "REMOVE_TOAST":
      if (action.toastId) {
        toasts = toasts.filter((t) => t.id !== action.toastId);
      } else {
        toasts = toasts.slice(1);
      }
      count = toasts.length;
      break;
  }
}

function useToast() {
  const [memoryToasts, setMemoryToasts] = React.useState(toasts);

  React.useEffect(() => {
    toasts = memoryToasts;
    count = memoryToasts.length;
  }, [memoryToasts]);

  const toast = React.useCallback(({ ...props }) => {
    const id = Math.random().toString(36).slice(2, 9); // Generate a unique ID

    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

    const remove = () => dispatch({ type: "REMOVE_TOAST", toastId: id });

    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open) => {
          if (!open) dismiss();
        },
      },
    });

    const update = (props) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast: { ...props, id },
      });

    setMemoryToasts([...toasts]); // Update state after dispatch

    sonnerToast(props.description, {
      // Use sonnerToast to display
      id,
      ...props,
      onDismiss: dismiss,
      onAutoClose: remove,
    });

    return {
      id: id,
      dismiss,
      update,
    };
  }, []);

  return {
    toasts: memoryToasts,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast };
