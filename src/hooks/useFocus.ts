import React from 'react';

export function useFocus() {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const setFocus = () => {ref.current && ref.current.focus()}

  return [ ref, setFocus ];
}
