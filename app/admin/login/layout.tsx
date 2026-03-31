export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto" style={{ backgroundColor: '#0f1f40' }}>
      {children}
    </div>
  )
}
