import { memo } from 'react'
import { DayPicker } from 'react-day-picker'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import Section from '@shared/Section'

import classNames from 'classnames/bind'
import styles from './Calender.module.scss'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)

const css = `
    .rdp-caption {
        display: none;
    }
    .rdp-cell {
        cursor: default;
    }
    .rdp-head_cell {
        font-weight: 500;
        font-size: 14px;
        font-weight: bold;
    }
    .rdp-day_selected {
        background-color: var(--red);
        font-weight: bold;
        color: #fff;
    }
    .rdp-day_selected:hover {
        background-color: var(--red);
    }
`

function Calender({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default memo(Calender)
