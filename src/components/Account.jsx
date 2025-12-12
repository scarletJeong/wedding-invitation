import { useState } from 'react'

function Account() {
  const [copiedAccount, setCopiedAccount] = useState(null)

  const copyAccount = async (accountNumber) => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setCopiedAccount(accountNumber)
      setTimeout(() => {
        setCopiedAccount(null)
      }, 2000)
    } catch (err) {
      alert('복사에 실패했습니다. 직접 복사해주세요.')
    }
  }

  const accounts = [
    { name: '신랑 홍길동', bank: '국민은행', number: '1234-56-789012' },
    { name: '신부 김영희', bank: '신한은행', number: '9876-54-321098' }
  ]

  return (
    <div className="account">
      <h2>마음 전하실 곳</h2>
      {accounts.map((account, index) => (
        <div key={index} className="account-item">
          <div className="name">{account.name}</div>
          <div className="bank">{account.bank}</div>
          <div className="number">{account.number}</div>
          <button 
            className={`copy-btn ${copiedAccount === account.number ? 'copied' : ''}`}
            onClick={() => copyAccount(account.number)}
          >
            {copiedAccount === account.number ? '복사 완료!' : '계좌번호 복사'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Account

