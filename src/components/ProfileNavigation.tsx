const ProfileNavigation = () => {
  return (
    <div className="w-[12rem] h-[3rem] items-center rounded-3xl bg-ProfileNavBg flex gap-1 cur cursor-pointer">
      <div className="w-[3rem] h-[3rem] rounded-full bg-red-500" />
      <p className="text-backgroundGreen">Hello,</p>
      <p className="text-CoustomText text-lg">Priyankara</p>
    </div>
  );
};

export default ProfileNavigation;
