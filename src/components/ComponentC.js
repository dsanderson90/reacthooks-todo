import React, {useContext} from 'react';
import { UserContext, ChannelContext, MyContext } from '../App';
export default function ComponentC() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  const mine = useContext(MyContext)
  return (
    <div>
      {}
      {user}
      {channel}
      {mine}
    </div>
  );
}
