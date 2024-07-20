export const FeedBackRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-5 p-3 rounded-xl shadow-lg bg-tertiary flex-col md:flex-row">
      {children}
    </div>
  );
};
