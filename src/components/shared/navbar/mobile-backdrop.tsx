"use client";

type MobileMenuBackdropProperties = {
  onClick: () => void;
};

export const MobileMenuBackdrop = ({ onClick }: MobileMenuBackdropProperties) => {
  return (
    <div
      className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClick}
    />
  );
};
