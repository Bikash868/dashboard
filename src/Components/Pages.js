import React,{useEffect, useState} from 'react'
import UserCard from './UserCard';
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Pages = () => {
  const [userData,setUserData] = useState([]);
  const { t } = useTranslation()

  const fetch = async() => {
    try{
      const { data } = await axios.get('https://randomuser.me/api?results=10');
      console.log("res:",data)
      setUserData(data.results)
    } catch(err) {
      alert(err)
    }
  }

  useEffect(()=>{
    fetch();
  },[])

  return (
    <div className='flex flex-col justify-center' style={{width:'90%',margin:'auto'}}>

      <span className='Leadership flex flex-col text-4xl font-bold items-center m-5' >{t("Our_Leadership")}</span>

      <div className='flex flex-wrap justify-center'>
        {
          userData.length > 0 && userData.map((user)=> {
            const {title,first,last} = user.name
            const imageUrl = user.picture.large
            return <UserCard key={user.email} name={`${title} ${first} ${last}`} designation={user.email} imageUrl={imageUrl}/>
          })
        }
      </div>

    </div>
  )
}

export default Pages