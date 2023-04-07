export default function LayoutContent({ style, children, className, ...rest }) {
  return (
    <>
    <div {...rest}
      className={`${className ?? ''} h-full shadow-lg bg-white p-8 rounded-b-xl rounded-tr-xl border flex-1 overflow-y-auto`}
      style={style ?? { height: 'calc(100vh - 140px)' }}
    >
      {children}
    </div>
    </>
  )
}
