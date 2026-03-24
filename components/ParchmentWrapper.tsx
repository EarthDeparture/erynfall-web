export default function ParchmentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-content">
      <div className="deco-separator"></div>
      <div className="content-grid border-container">
        {children}
      </div>
      <div className="deco-separator bottom-sep"></div>
    </div>
  );
}
