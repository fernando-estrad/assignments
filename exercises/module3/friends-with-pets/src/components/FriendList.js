import React from "react"
import friendsData from "../friendsArray"
import Friend from "./Friend"

function FriendList(){
    const friendProps = friendsData.map(friend => <Friend friend={friend} />)
    return(
        <div className="friend-list">
            {friendProps}
        </div>
    )
}

export default FriendList