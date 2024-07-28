import { useState } from 'react'
import Section from '@shared/Section'
import ImageViewer from '../ImageViewer'
import generateImageUrl from '@/utils/generateImageUrl'

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
              onClick={() => {
                handleSelectImg(idx)
              }}
            >
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  type="image/webp"
                />
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                    option: 'w_240,h_240,c_fill,q_auto',
                  })}
                  alt="이미지"
                />
              </picture>
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
