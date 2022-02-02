import React,{useState} from 'react';
import './style.scss';
import zafClient from '../../frameworks_and_drivers/external_interfaces/zendesk/zaf_client';

const App = () => {
  const [requester, setRequester] = React.useState<any>()

  React.useEffect(() => {
    const execute = async() => {
      console.log('Aqui')
      zafClient.invoke('resize', { height: '400px' })
      const data = await zafClient.get('ticket.requester')
      console.log(data)
      const requester = data['ticket.requester']
      setRequester(requester)
    }
    execute();
  }, [])

  return (
    <div className="App">
      <div>
        <p>hola</p>
      </div>
    </div>
  )
}

export default App
