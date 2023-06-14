import { PuzzlePieceIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

const Loader: FC = () => {
  return <div style={{display: "flex", justifyContent: "center", paddingBlock: "4rem"}}>
    <PuzzlePieceIcon className='animate-spin' width={24} height={24} />
  </div>
}

export default Loader