import Section from '@shared/Section'

import classNames from 'classnames/bind'
import Dimmed from './Dimmed'
import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

interface ModalProps {
  open: boolean
  title?: string
  body: React.ReactNode
  rightBtnLabel?: string
  onRightBtnClick: () => void
  leftBtnLabel?: string
  onLeftBtnClick: () => void
}

function Modal({
  open,
  title,
  body,
  leftBtnLabel = '닫기',
  onLeftBtnClick,
  rightBtnLabel = '확인',
  onRightBtnClick,
}: ModalProps) {
  if (open === false) {
    return null
  }
  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title == null ? null : (
              <div className={cx('txt-title')}>{title}</div>
            )}
            {body}
          </div>

          <div className={cx('wrap-buttons')}>
            <button onClick={onLeftBtnClick}>{leftBtnLabel}</button>
            <button onClick={onRightBtnClick}>{rightBtnLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
