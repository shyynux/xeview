import { useState } from 'react';
import cover from './assets/Credits goes to @orig_ginal on Instagram and @GG-UNIVERSE on Youtube.jpg';
import pfp from './assets/🧋.jpg';
import './App.css';
import blueTick from './assets/verified.png';
import tix from './assets/aesthetic messy header twitter.jpg';
import banner from './assets/city.png';
import EditProfileForm from './EditProfileForm';
import locationPin from './assets/pin_927667.png';
import calendar from './assets/icons8-calendar-32.png';
import linkIcon from './assets/link-16.png';

function App() {
  const [profile, setProfile] = useState({
    displayName: "Demi Moore",
    bio: "Working on @appwrite, contributor at @traversymedia, developer advocate and online instructor.",
    location: "montreal",
    website: "me.me",
    coverPhoto: cover,
    profilePicture: pfp,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = (data: any) => {
    setProfile({
      ...profile,
      displayName: data.displayName,
      bio: data.bio,
      location: data.location,
      website: data.website,
      coverPhoto: data.coverPhoto,
      profilePicture: data.profilePicture,
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className=''> 
        <h1 className='bg-white font-serif font-bold text-3xl text-left m-2 p-2'>X(Imagined)</h1>
        <div className='flex flex-row gap-2 m-6'>
          {/* col - 1: side panel */}
          <div className='w-1/5 py-40 text-center'>
            <p className='text-2xl'> See your updated </p>
            <p> twitter, </p>
            <p> without losing the </p>
            <p className='text-3xl font-thin'> blue tick. </p>
          </div>
          {/* col - 2 main panel */}
          <div className='flex bg-white flex-col w-3/5 border-2 border-black shadow-2xl'>
            <div className="flex items-center text-left px-4 py-2 border-b">
              <span className="px-2 cursor-pointer">←</span>
              <div>
                <div className="flex items-center">
                  <span className="text-xl font-bold">{profile.displayName}</span>
                  <img src={blueTick} alt="Blue Tick" className="mx-2 w-4" />
                </div>
                <p className="text-gray-600">1112 posts</p>
              </div>
            </div>
            <div>
              {/* Cover Photo */}
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${profile.coverPhoto})` }}
              ></div>
              {/* Profile Image */}
              <div className="-mt-20 mx-auto flex justify-between items-end">
                <div className="flex items-center">
                  <img className="mx-4 h-48 w-48 rounded-full border-4 border-white" src={profile.profilePicture} alt="Profile" />
                </div>
                <button onClick={handleEditClick} className="self-center mt-10 mr-4 h-8 px-4 border-2 border-gray-300 font-bold rounded-full">Edit profile</button>
              </div>
            </div>
            <div className='flex text-left px-4 text-xl font-bold mt-4'> {profile.displayName}
              <img src={blueTick} className='mx-2 w-4 self-center' />
            </div>
            <div className='px-4'>
              <p className="text-left text-gray-600">@demi</p>
            </div>
            <div className='pt-4 text-left px-4'>
              <div>
                {profile.bio}
              </div>
              <div className="flex items-center text-gray-500">
                <img src={locationPin} className="w-4 h-4 mr-1" alt="Location Pin" />
                <span className="mr-4">{profile.location}</span>
                <img src={linkIcon} className="w-4 h-4 mr-1" alt="Link Icon" />
                <a href={profile.website} className="text-blue-400 mr-4">{profile.website}</a>
                <img src={calendar} className="w-6 h-6 mr-1" alt="Calendar Icon" />
                <span>Joined January 2024</span>
              </div>
              <div className='py-4 text-gray-500'>
                <span className='pr-4'>
                  <strong className='text-black'>729 </strong> Following
                </span>
                <strong className='text-black'> 189K </strong> Followers
              </div>
            </div>
            <div> 6 switchers (unclickable for now) </div>
            <div> name and 1 post component </div>
          </div>
          {/* col - 3 right panel */}
          <div className='w-1/5 py-40'>
            <p className='text-2xl'> Click - Edit Profile </p>
            <p> no login required, </p>
            <p> a simple way to visualize </p>
            <p className='text-3xl font-thin'> your new X profile. </p>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-4">
            <EditProfileForm
              initialValues={profile}
              onSubmit={handleSaveChanges}
              onCancel={handleCancelEdit}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
