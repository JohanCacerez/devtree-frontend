//se agrega reactNode para que pueda recibir cualquier tipo de contenido
export default function ErrorsMessage({children} : {children: React.ReactNode}) {
  return (
    <div className="text-red-600 bg-red-50 p-3 uppercase text-sm font-bold text-center">{children}</div>
  )
}
