import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          <p>에러가 발생했습니다. 다시 시도해주세요.</p>
        </>
      )}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.2746538,18 C14.5292972,16.9402308 13.3195004,16.2978292 12,16.2978292 C10.6804996,16.2978292 9.4707028,16.9402308 8.72534624,18 L7.08943782,16.8494333 C8.20545254,15.2626519 10.0224456,14.2978292 12,14.2978292 C13.9775544,14.2978292 15.7945475,15.2626519 16.9105622,16.8494333 L15.2746538,18 Z M14,12 L14,10 L16,10 L16,12 L14,12 Z M8,12 L8,10 L10,10 L10,12 L8,12 Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default FullScreenMessage
