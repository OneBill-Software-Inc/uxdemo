export default function LayoutContent({ children }) {
  return (
    <div
      className="h-full shadow-lg bg-white p-8 rounded-xl border flex-1 overflow-y-auto "
      style={{ height: 'calc(100vh - 140px)' }}
    >
      {children}
    </div>
  )
}
