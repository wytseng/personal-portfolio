import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import friendFinder from '../../../public/workFriendFinder.png';
import communitea from '../../../public/workCommunitea.png';
import linkUp from "../../../public/workLinkUp.png";
import './Works.css';

export default function Works() {
  return (
    <div>
      <h2 className='font-poppins font-bold text-forest text-3xl pt-10 drop-shadow-md'>My Work</h2>
      {/* <div> */}
        {/* <p className='text-md py-2 leading-8 text-gray-800'>
          I have started my developer journey as a 
          <span className="text-teal-500"> full-stack developer </span> at Givsum. 
          I have experience working with React.js, TypeScript, Ruby on Rails, ...
        </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
          I am passionate about improve my own skill set and always open to learning new skills!
        </p>
      </div> */}
      <div className="work py-4 text-center"> 
        <div className="py-4 px-2 drop-shadow-xl">
          <Image className="rounded-t-lg border-4 border-forest -skew-y-2" alt="friend_finder_homepage" src={friendFinder} style={{margin:'auto'}} />
          <h3 className="-mt-1 p-3 rounded-b-lg font-poppins font-bold text-white bg-forest -skew-y-2">Friend Finder</h3>
        </div>
        <p className="py-4 text-sm"> 
          Online platform where people can network and enjoy talking about their favorite hobbies. 
          Users can create chat rooms, send messages, create unique user profiles, and make friends.
        </p>
        <div className="flex gap-2 px-6">
          <button className="animateButton font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg">Demo</button>
          <button className="animateButton font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg"><FiGithub style={{display: 'inline'}}/> GitHub</button>
        </div>
      </div>
      <div className="work py-4 text-center"> 
        <div className="py-4 px-2 drop-shadow-xl">
          <Image className="rounded-t-lg border-4 border-forest skew-y-2" alt="communitea_homepage" src={communitea} style={{margin:'auto'}} />
          <h3 className="-mt-1 p-3 rounded-b-lg font-poppins font-bold text-white bg-forest skew-y-2">CommuniTEA</h3>
        </div>
        <p className="py-4 text-sm"> 
          A Yelp equivalent for milk tea stores. 
          Users can view and leave their reviews as well as add different businesses to their favorites list.
        </p>
        <div className="flex gap-2 px-6">
          <button className="animateButton font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg">Demo</button>
          <button className="animateButton font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg"><FiGithub style={{display: 'inline'}}/> GitHub</button>
        </div>
      </div>
      <div className="work py-4 text-center"> 
        <div className="py-4 px-2 drop-shadow-xl">
          <Image className="rounded-t-lg border-4 border-forest -skew-y-2" alt="linkup_demo" src={linkUp} style={{margin:'auto'}} />
          <h3 className="-mt-1 p-3 rounded-b-lg font-poppins font-bold text-white bg-forest -skew-y-2">LinkUp</h3>
        </div>
        <p className="py-4 text-sm"> 
          This is a work-in-progress scheduling phone app that allows users to host events and invite attendies to fill in availabilities.
          The app can find the best time for an event to be hosted. 
        </p>
        <div className="flex gap-2 px-6 justify-around">
          {/* <button className="animateButton font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg">Demo</button> */}
          <button className="animateButton font-semibold w-1/2 bg-mist border-3 p-2 border-forest rounded-lg"><FiGithub style={{display: 'inline'}}/> GitHub</button>
        </div>
      </div>
    </div>
  );
}