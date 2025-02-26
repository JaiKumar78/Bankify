import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { 
    firstName: "Jai Kumar", 
    lastName: "Dhanasekaran",
    email: "jaikumard@gmail.com"
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title= "Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext='Access and manage your account and transactions efficiently!'
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={15534.79} 
          />
        </header>
      </div>
      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 7500 }, { currentBalance: 3748 }]}
      />
    </section>
  )
}

export default Home