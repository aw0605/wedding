import { Wedding } from '@models/wedding'
import { useModalContext } from '@contexts/ModalContext'
import { useEffect, useRef } from 'react'

function AttendCountModal({ wedding }: { wedding: Wedding }) {
  const { open, close } = useModalContext()

  const $input = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return
    }

    open({
      title: `현재 참석 예정: ${wedding.attendCount} 명`,
      body: (
        <div>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요"
            style={{ width: '100%' }}
            type="number"
          />
        </div>
      ),
      onLeftBtnClick: () => {
        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
      onRightBtnClick: async () => {
        if ($input.current == null) {
          return
        }

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })
  }, [open, close, wedding, haveSeenModal])

  return null
}

export default AttendCountModal
