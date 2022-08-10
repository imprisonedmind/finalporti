export default function LinkedWord({link, colour, title}) {
  return (
      <span className={`${colour} underline`}>
        <a rel={'noreferrer'} target={'_blank'}
           href={link}>{title}</a>
      </span>
  )
}