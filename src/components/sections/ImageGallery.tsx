import { useState } from 'react'
import Section from '@shared/Section'
import ImageViewer from '../ImageViewer'

import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectIdx, setSelectIdx] = useState(-1)

  const open = selectIdx > -1

  const handleSelectImg = (idx: number) => {
    setSelectIdx(idx)
  }

  const handleClose = () => {
    setSelectIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-imgs')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-img')}
              onClick={() => handleSelectImg(idx)}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectIdx={selectIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
