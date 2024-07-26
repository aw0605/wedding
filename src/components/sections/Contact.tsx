import Section from '@shared/Section'
import Accordion from '../shared/Accordion'

import { Person, Wedding } from '@/models/wedding'

import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

function Contact({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo
          name={groom.name}
          account={groom.account}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          name={groom.parents[0].name}
          account={groom.parents[0].account}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        <ContactInfo
          name={groom.parents[1].name}
          account={groom.parents[1].account}
          phoneNumber={groom.parents[1].phoneNumber}
        />
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          name={bride.name}
          account={bride.account}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          name={bride.parents[0].name}
          account={bride.parents[0].account}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          name={bride.parents[1].name}
          account={bride.parents[1].account}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div className={cx('wrap-contact')}>
      <div className={cx('wrap-contact-info')}>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>

      <ul className={cx('wrap-buttons')}>
        <li>
          <a href={`tel: ${phoneNumber}`} className={cx('button')}>
            <IconCall className={cx('icon')} />
            <span>전화</span>
          </a>
        </li>
        <li className={cx('button')}>
          <IconCopy className={cx('icon')} />
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <span>복사</span>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink != null ? (
          <li>
            <a
              href={account.kakaopayLink}
              className={cx('button')}
              target="_blank"
              rel="noreferrer"
            >
              <IconRemit className={cx('icon')} />
              <span>송금</span>
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

function IconCall({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M10.9745053,6.25438069 C11.5604671,6.90391332 11.3746817,7.63976469 10.8565778,8.33797195 C10.7337406,8.50350982 10.5921521,8.6666145 10.4211441,8.84634226 C10.3390625,8.93260918 10.2750591,8.99748744 10.141183,9.13149508 C9.83714115,9.43583583 9.58155513,9.69156272 9.37441088,9.89868984 C9.27396046,9.99913195 9.95978257,11.3696024 11.2907766,12.7019048 C12.6210476,14.0334833 13.9914431,14.7197765 14.0923663,14.6187976 L14.8586096,13.852132 C15.2805737,13.4297532 15.5040355,13.2259664 15.8111037,13.0245121 C16.4494656,12.6057102 17.1457524,12.4919023 17.7329975,13.0170075 C19.6503895,14.3885354 20.7354185,15.2301771 21.2669798,15.782495 C22.303783,16.8597835 22.1679037,18.5180455 21.2728679,19.4640525 C20.9625009,19.7920945 20.5689704,20.1858419 20.1041752,20.6339203 C17.2926326,23.4470127 11.3589665,21.7350681 6.81145433,17.1830859 C2.26291105,12.6300716 0.5518801,6.69583839 3.35753082,3.88868121 C3.86122573,3.37707043 4.02729858,3.211082 4.51785466,2.72771931 C5.43117982,1.82778693 7.16594962,1.68687606 8.22050841,2.7286095 C8.77521019,3.27656509 9.65955176,4.41440275 10.9745053,6.25438069 Z M16.2721965,15.266193 L15.5058008,16.0330112 C14.203091,17.336439 11.9845452,16.2253927 9.8770373,14.1158132 C7.76808363,12.0047866 6.65827534,9.78706944 7.96142436,8.48402821 C8.16828995,8.27717972 8.42363443,8.0216945 8.72744369,7.71758662 C8.8500234,7.59488642 8.90609452,7.5380489 8.97339653,7.46731514 C9.06509326,7.37094278 9.1404434,7.28630078 9.20077275,7.211402 C8.03540499,5.58806095 7.24320651,4.57370892 6.8161396,4.15183592 C6.59558525,3.93396391 6.1017247,3.97407893 5.9204189,4.1527261 C5.43686641,4.6291879 5.27792422,4.78804929 4.77626041,5.29755675 C2.9719475,7.10286418 4.35321008,11.8933879 8.22519368,15.7691775 C12.0959638,19.6437524 16.8857659,21.0256764 18.7038097,19.2068681 C19.161375,18.7655298 19.5342402,18.3924591 19.8212354,18.08912 C20.0286173,17.8699279 20.0656783,17.4176384 19.8271235,17.1697684 C19.4297888,16.7569185 18.4570205,15.9984643 16.777362,14.7922626 C16.6549304,14.8908077 16.5044234,15.033738 16.2721965,15.266193 Z" />
    </svg>
  )
}

function IconCopy({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path d="M448 0H224C188.7 0 160 28.65 160 64v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0zM464 288c0 8.822-7.178 16-16 16H224C215.2 304 208 296.8 208 288V64c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16V288zM304 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V224c0-8.822 7.178-16 16-16h64V160H64C28.65 160 0 188.7 0 224v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-64h-48V448z" />
    </svg>
  )
}

function IconRemit({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm1 1v1h2v2H9a.5.5 0 0 0-.09.992L9 13h2a2.5 2.5 0 1 1 0 5v1H9v-1H7v-2h4a.5.5 0 0 0 .09-.992L11 15H9a2.5 2.5 0 1 1 0-5V9h2zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z" />
      </g>
    </svg>
  )
}

export default Contact
