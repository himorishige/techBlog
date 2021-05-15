import React from 'react';
import styled, { keyframes } from 'styled-components';

type TOAST_TYPE = 'SUCCESS' | 'FAIL';

const FadeIn = keyframes`
from {
  opacity: 0;
  bottom: 2rem;
}
to {
  opacity: 1;
  bottom: 4rem;
}
`;

const StyledToast = styled.div<{ type: string }>`
  animation: ${FadeIn} 0.3s linear;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 40px;
  padding: 1rem;
  bottom: 4rem;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 4px;
  color: white;
  background: ${(props) =>
    props.type === 'SUCCESS' ? 'rgba(0,100,200,0.9)' : 'rgba(200,0,0,0.9)'};
`;

const ToastContext = React.createContext({
  showToast: (toastType: TOAST_TYPE, message: string) => {
    console.log(message);
  },
});

type Props = {
  children: React.ReactNode;
};

export const ToastProvider: React.VFC<Props> = (props) => {
  const [state, update] = React.useState({
    show: false,
    message: '1',
    toastType: 'SUCCESS',
  });

  const showToast = (toastType: TOAST_TYPE, message: string) => {
    update({ show: true, message, toastType });
    setTimeout(() => update({ ...state, show: false, message: message }), 3000);
  };

  return (
    <>
      <ToastContext.Provider value={{ showToast }}>{props.children}</ToastContext.Provider>
      {state.show && <StyledToast type={state.toastType}>{state.message}</StyledToast>}
    </>
  );
};

export const useToast = () => React.useContext(ToastContext);
