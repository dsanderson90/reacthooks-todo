import React from 'react';
import { UserContext, ChannelContext } from '../App';
export default function ComponentC() {
  return (
    <div>
      CompC
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    Channel Context Value {channel}, User context value {user}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
