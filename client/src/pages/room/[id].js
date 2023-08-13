import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { page, id } = useParams();
  const zegoElementRef = useRef(null);

 
    const myMeeting = async (element) => {
      // const appID = 1504355759;
      const appID = 1182855183;
      // const serverSecret = "967100962ff8a2aba5f313cdbce7657c";
      const serverSecret = "aec7d28ecc19d75780671790ea432515";
      // console.log(id);
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        id.toString(),
        Date.now().toString(),
        "Piyush"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
      
    };

    // myMeeting();

    // Clean up the Zego UI when component unmounts
    
 
    return (
        <div className="room-page">
        <div ref={myMeeting} />
        </div>
        ); };


export default RoomPage;
