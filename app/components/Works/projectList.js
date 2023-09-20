import friendFinder from '../../../public/workFriendFinder.png';
import communitea from '../../../public/workCommunitea.png';
import linkUp from "../../../public/workLinkUp.png";

export const works = [
  {
    direction: 0,
    img: friendFinder,
    alt: "friend_finder_home",
    title: "Friend Finder",
    description: "Online social platform where people can network and enjoy talking about their interests & hobbies. Users can create chat rooms, send messages, create unique user profiles, and make friends.",
    demo: "https://calm-savannah-54938.herokuapp.com/",
    github: "https://github.com/CleveHardcastle/friend_finder",
  },
  {
    direction: 1,
    img: linkUp,
    alt: "linkup_demo",
    title: "LinkUp",
    description: "This is a work-in-progress event scheduling app that allows users to host events and invite attendies to fill in availabilities. The app has functionalities of collecting attendies' availabilies, generating final event datetime, and sharing event to user calendars. ",
    demo: "",
    github: "https://github.com/lsuan/link-up",
  },
  {
    direction: 0,
    img: communitea,
    alt: "communiTEA_home",
    title: "CommuniTEA",
    description: "A Yelp equivalent for milk tea stores. The application fetches and filters search results through a Yelp API. Users can view and leave their reviews as well as add different businesses to their favorites list.",
    demo: "https://communitea-ctrl-alt-elite-271d773117d3.herokuapp.com/",
    github: "https://github.com/UCI-team-project/communiTEA",
  },
];