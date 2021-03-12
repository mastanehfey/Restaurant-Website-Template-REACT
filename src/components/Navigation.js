//i used this componnet in Menu component, to catch the browser back and forward navigatin to rerender the page
import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useContext} from 'react'
import {mainContext} from '../context'

export default function Navigation() {    
    const myContext = useContext(mainContext)
    let {filterList} = myContext
    const [ locationKeys, setLocationKeys ] = useState([])
    const history = useHistory()

useEffect(() => {
  return history.listen(location => {
    if (history.action === 'PUSH') {
      setLocationKeys([ location.key ])
    }
    const food = history.location.pathname.substr(6,history.location.pathname.length)
    if (history.action === 'POP') {
      if (locationKeys[1] === location.key) {
        setLocationKeys(([ _, ...keys ]) => keys)

        // Handle forward event
        filterList(food)

      } else {
        setLocationKeys((keys) => [ location.key, ...keys ])
        filterList(food)
        // Handle back event
      }
    }
  })
}, [ locationKeys, filterList, history])

    return (
        <>            
        </>
    )
}
